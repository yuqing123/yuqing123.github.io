google.load("visualization", "1", {packages:["table"]});
      google.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'State');
        data.addColumn('number', 'Population %');
        data.addColumn('number', 'Living with parent %');
        data.addColumn('number', 'Never Married %');
        data.addColumn('number', 'Bachelor Degree %');
        data.addColumn('number', 'Employed %');
        data.addRows([['Alabama', 22.819, 31.03, 61.65, 16.95, 60.95], ['Alaska', 25.707, 26.23, 59.63, 16.45, 63.54], ['Arizona', 23.353, 28.07, 64.35, 17.52, 63.38], ['Arkansas', 22.721, 25.36, 55.82, 15.36, 63.64], ['California', 24.913, 34.48, 68.79, 21.73, 62.07], ['Colorado', 24.4, 22.19, 61.49, 26.49, 69.19], ['Connecticut', 21.32, 35.31, 72.41, 28.02, 67.34], ['Delaware', 22.727, 33.21, 70.24, 22.04, 65.56], ['District of Columbia', 35.036, 15.47, 83.39, 51.29, 64.88], ['Florida', 21.561, 34.92, 68.67, 18.45, 62.77], ['Georgia', 23.881, 29.68, 64.5, 19.84, 60.41], ['Hawaii', 23.738, 31.03, 64.48, 20.91, 62.28], ['Idaho', 23.096, 21.96, 51.82, 16.39, 66.46], ['Illinois', 23.587, 32.91, 68.57, 27.48, 67.06], ['Indiana', 22.877, 27.21, 62.72, 18.98, 65.46], ['Iowa', 22.767, 20.08, 61.67, 22.36, 75.17], ['Kansas', 23.527, 21.82, 58.93, 22.65, 69.95], ['Kentucky', 22.571, 27.44, 58.63, 17.81, 63.14], ['Louisiana', 24.375, 30.94, 66.54, 17.47, 63.43], ['Maine', 19.756, 25.98, 66.73, 20.73, 69.86], ['Maryland', 23.079, 33.69, 70.08, 28.31, 68.33], ['Massachusetts', 23.596, 31.29, 74.47, 33.78, 68.7], ['Michigan', 21.842, 32.77, 69.02, 19.73, 63.56], ['Minnesota', 23.023, 23.67, 64.85, 27.06, 75.54], ['Mississippi', 23.405, 32.86, 65.09, 14.18, 56.98], ['Missouri', 22.901, 25.97, 62.19, 21.84, 68.24], ['Montana', 22.154, 21.23, 62.51, 20.4, 69.13], ['Nebraska', 23.547, 20.39, 60.37, 23.28, 75.81], ['Nevada', 23.477, 27.66, 62.22, 15.27, 66.11], ['New Hampshire', 20.63, 30.84, 68.82, 24.9, 71.64], ['New Jersey', 21.514, 40.72, 71.14, 29.86, 65.96], ['New Mexico', 23.163, 31.04, 64.35, 14.4, 61.73], ['New York', 24.126, 35.73, 73.69, 30.35, 63.66], ['North Carolina', 22.951, 26.65, 63.48, 20.79, 61.62], ['North Dakota', 26.118, 15.42, 63.42, 22.37, 76.32], ['Ohio', 21.949, 29.11, 66.54, 21.0, 66.72], ['Oklahoma', 23.744, 23.15, 55.91, 17.06, 65.62], ['Oregon', 23.039, 23.03, 63.26, 20.97, 65.16], ['Pennsylvania', 22.065, 32.56, 71.09, 24.85, 65.43], ['Rhode Island', 23.71, 31.6, 75.25, 24.26, 67.28], ['South Carolina', 23.103, 28.95, 66.81, 18.64, 61.37], ['South Dakota', 23.084, 18.99, 60.75, 19.87, 73.59], ['Tennessee', 22.632, 28.27, 60.61, 19.28, 64.27], ['Texas', 24.667, 29.45, 60.01, 18.8, 65.26], ['Utah', 27.237, 25.3, 49.25, 19.81, 70.84], ['Vermont', 21.748, 23.37, 72.55, 24.28, 68.26], ['Virginia', 23.846, 27.66, 64.84, 27.42, 65.21], ['Washington', 23.721, 24.79, 62.09, 22.68, 65.02], ['West VA', 21.113, 30.61, 61.19, 16.35, 60.34], ['Wisconsin', 22.407, 24.72, 66.52, 21.72, 73.03], ['Wyoming', 23.87, 19.2, 56.01, 17.52, 71.2]]
          );

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true});
      }