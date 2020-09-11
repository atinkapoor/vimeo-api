/**
 *   Copyright 2013 Vimeo
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */
let express = require('express');
let cors = require('cors');
let app = express();
let port = process.env.PORT || 8000;
let bodyParser = require('body-parser');


let vimeoModule = require('./lib/vimeo')
module.exports.vimeo_module = vimeoModule
module.exports.Vimeo = vimeoModule.Vimeo

app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./routes');
routes(app);

app.listen(port);
console.log('RESTful API server started on: ' + port);