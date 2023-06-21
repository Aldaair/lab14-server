const { jsPDF } = require("jspdf");
const moment = require("moment");
require("jspdf-autotable");
const Pasa = require("../models/Pasa");

const generarPDF = async (req, res) => {
  const name = "Aldair";
  try {
    const result = await Pasa.aggregate([
      {
        $group: {
          _id: "$id_cine",
          peliculas: { $push: "$id_pelicula" },
          hora: { $push: "$hora" },
        },
      },
      {
        $lookup: {
          from: "cines",
          localField: "_id",
          foreignField: "_id",
          as: "cine",
        },
      },
      {
        $lookup: {
          from: "peliculas",
          localField: "peliculas",
          foreignField: "_id",
          as: "peliculasInfo",
        },
      },
      {
        $project: {
          _id: 1,
          cine: { $arrayElemAt: ["$cine", 0] },
          peliculas: "$peliculasInfo",
          hora: 1,
        },
      },
    ]);

    const nombreArchivo = "CinesYPeliculas.pdf";
    const doc = new jsPDF();

    doc.page = 1; // Utiliza esto como contador.
    var totalPages = 10; // Define el total de páginas.

    // HEADER
    doc.setFontSize(14);
    doc.setTextColor(40);
    doc.text(
      "Fecha: " + moment().format("DD-MM-YYYY"),
      doc.internal.pageSize.getWidth() - 20,
      10,
      {
        align: "right",
      }
    );
    doc.text("Nombre: " + name, doc.internal.pageSize.getWidth() - 20, 20, {
      align: "right",
    });
    doc.setFontSize(20);
    doc.setTextColor(40);
    doc.text("Reporte", doc.internal.pageSize.getWidth() / 2, 10, {
      align: "center",
    });

    // Dibujar línea de marco
    doc.setDrawColor(0); // Establecer color de línea a negro
    doc.setLineWidth(1); // Establecer grosor de línea a 1
    doc.line(20, 40, doc.internal.pageSize.getWidth() - 20, 40); // Dibujar línea

    // FOOTER
    var str = "Página " + doc.page + " de " + totalPages;
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(
      str,
      doc.internal.pageSize.getWidth() / 2,
      doc.internal.pageSize.getHeight() - 10,
      {
        align: "center",
      }
    );

    // Configurar tabla
    doc.setFontSize(15);
    const tableData = [];

    result.forEach((cine) => {
      // Crear fila para el cine y dirección con rowspan según la cantidad de películas
      const cineRow = [
        { content: cine.cine.nombre, rowSpan: cine.peliculas.length },
        { content: cine.cine.calle, rowSpan: cine.peliculas.length },
        { content: cine.peliculas[0].titulo },
        { content: cine.peliculas[0].clasificacion },
        { content: cine.peliculas[0].genero },
        {
          content: moment(cine.hora[0]).format("DD-MM-YYYY HH:MM"),
          styles: { halign: "center" },
        },
      ];

      cine.peliculas.forEach((pelicula, index) => {
        // Crear fila para cada película
        if (index == 0) return;
        const peliculaRow = [
          { content: pelicula.titulo, styles: { halign: "center" } },
          { content: pelicula.clasificacion, styles: { halign: "center" } },
          { content: pelicula.genero, styles: { halign: "center" } },
          {
            content: moment(cine.hora[index]).format("DD-MM-YYYY HH:MM"),
            styles: { halign: "center" },
          },
        ];

        tableData.push(peliculaRow);
      });

      // Agregar la fila del cine y dirección al principio de la tabla
      tableData.unshift(cineRow);
    });

    // Generar tabla
    doc.autoTable({
      theme: "grid",
      startY: 30,
      head: [
        ["Cine", "Dirección", "Películas", "Clasificación", "Género", "Hora"],
      ],
      body: tableData,
      didParseCell: function (data) {
        if (typeof data.cell.raw === "object") {
          // Alinear el contenido de las celdas fusionadas al centro
          data.cell.styles.halign = "center";
        }
      },
      willDrawCell: function (data) {
        if (
          data.section === "body" &&
          (data.column.index === 0 || data.column.index === 1)
        ) {
          const lastRowIndex = data.table.body.length - 1;
          if (data.row.index === lastRowIndex) {
            // Establecer el color de fondo y fusionar las celdas para la última fila de las columnas "Cine" y "Dirección"
            data.cell.styles.fillColor = "#f2f2f2";
            const rowSpan = tableData.length % 2 === 0 ? 2 : 3;
            data.cell.styles.rowSpan = rowSpan;
            data.row.height = rowSpan * data.row.height;
          }
        }
      },
    });

    // Descargar archivo
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${nombreArchivo}"`
    );
    res.setHeader("Content-Type", "application/pdf");
    res.contentType("application/pdf");
    res.send(Buffer.from(doc.output("arraybuffer")));
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al generar el PDF");
  }
};

module.exports = {
  generarPDF,
};
