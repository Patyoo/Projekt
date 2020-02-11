export default class GlobalConfigManager {
  static myInstance = null;

  _applicationID = 'ED7DC74A-5432-5A53-FF0B-4B3C625BB700';
  _iOS_API_key = 'B7BDF275-E401-4A55-AC52-3B609B0379F7';
  _Android_API_key = 'C8B12080-2B7E-4902-A060-B715956B315B';
  _REST_API_key = '06D797EF-8242-4ABD-9794-31E3F67DD2B3';
  _mainRoute = 'https://api.backendless.com/';

  static getInstance() {
    if (GlobalConfigManager.myInstance == null) {
      GlobalConfigManager.myInstance = new GlobalConfigManager();
    }
    return this.myInstance;
  }

  getApplicationID() {
    return this._applicationID;
  }
  getIOS_API_key() {
    return this._iOS_API_key;
  }
  getAndroid_API_key() {
    return this._Android_API_key;
  }
  getREST_API_key() {
    return this._REST_API_key;
  }
  getMainRoute() {
    return this._mainRoute;
  }
}
