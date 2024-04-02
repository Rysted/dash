## Estructura del archivo JSON (svg_info.json)

El archivo JSON sigue la siguiente estructura:

- **Nombre del objeto:** `string`

  - **width:** Ancho del objeto (en pixeles) - `number`
  - **height:** Alto del objeto (en pixeles) - `number`
  - **viewBox:** Área de visualización - `string`
  - **fill:** Color de relleno del objeto (en formato hexadecimal) - `string`

  - **paths:** Una lista de objetos que contienen las siguientes propiedades:
    - **path_id:** Identificador del camino - `number`
    - **d:** Descripción de la trayectoria del objeto - `string`
    - **fill (opcional):** Color de relleno de la trayectoria (en formato hexadecimal) - `string`
    - **stroke (opcional):** Color del borde de la trayectoria (en formato hexadecimal) - `string`
    - **strokeWidth (opcional):** Ancho del borde de la trayectoria - `string`
    - **strokeLinecap (opcional):** Estilo del extremo de la línea (`round`, `butt`, `square`)
    - **strokeLinejoin (opcional):** Estilo de unión de las líneas (`round`, `miter`, `bevel`)

Cada objeto dentro de la lista `paths` describe un camino específico del icono.
