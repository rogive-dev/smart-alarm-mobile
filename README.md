## Smart Alarm

Para correr el proyecto de forma local en tu dispositivo realiza los siguientes pasos:

### 1 - Preparativos

* Asegúrate de tener Node.js instalado en tu máquina.

* Instala expo-cli de forma global con npm o yarn:

  ```
  npm install -g expo-cli
  ```

  o

  ```
  yarn global add expo-cli
  ```

### 2 - Proyecto

* Descarga el proyecto desde este repositorio.

* Luego, navega al directorio del proyecto:

  ```
  cd path/to/project
  ```

### 3 - Configurar emulador de Android

* Instala Android Studio.

* Durante la instalación, asegúrate de instalar también las "Android Virtual Devices" (AVD) y las "Android SDK Platform-Tools".

* Abre Android Studio y ve a `Tools > AVD Manager` y crea un nuevo dispositivo virtual si aún no tienes uno.

* Inicia el emulador desde el AVD Manager.

### 4 - Ejecuta el proyecto en el emulador

* En la terminal, desde el directorio del proyecto, ejecuta:

  ```
  expo start
  ```

* Esto desplegará en la terminal un código QR y algunas opciones.

* En la lista encontrarás opciones para correr la aplicación en dispositivos/emuladores específicos. Sigue las instrucciones que se muestran para la siguiente opción:

  ```
  > Press a | open Android
  ```

### 5 - Aplicación

* Expo se encargará de construir el JavaScript y de enviarlo al emulador.

* Una vez completado, deberías ver la aplicación ejecutándose en el emulador.

### 6 - Extras

* Cualquier cambio que hagas en el código de la aplicación se reflejará automáticamente en el emulador, gracias al `hot reloading` de Expo.
