# Leaflet Demo

Demo of leaflet.js + AngularUI Router

## Built with...
* [Milligram](https://milligram.github.io/)
* [Leaflet.js](http://leafletjs.com/)
* AngularJS
* [AngularUI Router](https://github.com/angular-ui/ui-router)

### Note:
You will need a public access token from Mapbox for the embedded map to work. Store your access token under assets/js/mapboxApi.js like so:
```javascript
const pubAccessToken = 'myPublicAccessTokenString';
```
When you create a Mapbox account, you will also need to go to the [Mapbox Editor](https://www.mapbox.com/studio/classic/projects/) and create a new project. Also store the project ID in mapboxApi.js:
```javascript
const projectId = 'myMapboxEditorProjectId';
```