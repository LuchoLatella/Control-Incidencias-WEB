from flask import Flask, request, send_file
import pandas as pd
import io

app = Flask(__name__)

@app.route('/limpiar-datos', methods=['POST'])
def limpiar_datos():
    file = request.files['file']
    df = pd.read_csv(file)

    # Eliminar columnas
    columnas_a_eliminar = ["ID Tipo Básico", "ID Prioridad", "Inicio", "Fin", "Fecha inicio corrección", "Fin corrección"]
    df = df.drop(columns=columnas_a_eliminar)

    # Eliminar la primera fila
    df = df.iloc[1:]

    # Guardar el archivo temporalmente
    output = io.BytesIO()
    df.to_csv(output, index=False)
    output.seek(0)

    return send_file(output, as_attachment=True, download_name="datos_limpios.csv", mimetype="text/csv")

if __name__ == '__main__':
    app.run(debug=True)
