webpackJsonp([12],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos_pedidos__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(storage, navCtrl, store) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.store = store;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.userStateSubscription = this.store.select('userState').subscribe(function (userState) {
            _this.user = userState.user;
        });
        if (this.user == null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.userStateSubscription.unsubscribe();
    };
    HomePage.prototype.gotopedidos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pedidos_pedidos__["a" /* PedidosPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Zeus Mobile</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="card-background-page">\n    <ion-list>\n        <ion-list-header>\n            SELECCIONE SU OPCION\n        </ion-list-header>\n        <ion-item (click)="gotopedidos()">\n            <ion-thumbnail item-start>\n                <img src="../../assets/imgs/carrito.png">\n            </ion-thumbnail>\n            <h2>Pedidos</h2>\n            <p>Registre sus pedidos </p>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="../../assets/imgs/recaudos.jpeg">\n            </ion-thumbnail>\n            <h2>Recaudos</h2>\n            <p>Regiestre pagos clientes</p>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="../../assets/imgs/informes.png">\n            </ion-thumbnail>\n            <h2>Informes</h2>\n            <p>Consulte pedidos, productos y stocks</p>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="../../assets/imgs/encuestas.png">\n            </ion-thumbnail>\n            <h2>Ecuestas</h2>\n            <p>Nos intereza su opinión</p>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="../../assets/imgs/captar-cliente.jpg">\n            </ion-thumbnail>\n            <h2>Prospectos</h2>\n            <p>Agregue nuevos prospectos</p>\n        </ion-item>\n    </ion-list>\n    <ion-fab center bottom >\n        <button ion-fab mini>\n            <ion-icon  name="map"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export clsClientes */
/* unused harmony export clsVendedores */
/* unused harmony export clsMonedas */
/* unused harmony export clsBUs */
/* unused harmony export clsConceptos */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clsListaPedidos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clsPedidos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clsItemsPedido; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_guid_typescript__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_guid_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_guid_typescript__);

//clientes
var clsClientes = /** @class */ (function () {
    function clsClientes() {
        this.cliente = {
            idcliente: "",
            nomcliente: ""
        };
    }
    return clsClientes;
}());

//clase vendedores
var clsVendedores = /** @class */ (function () {
    function clsVendedores() {
    }
    clsVendedores.prototype.contructor = function () {
        this.vendedor = {
            idvendedor: "",
            nomvendedor: "",
        };
    };
    return clsVendedores;
}());

//clase monedas
var clsMonedas = /** @class */ (function () {
    function clsMonedas() {
    }
    clsMonedas.prototype.contructor = function () {
        this.moneda = {
            idmoneda: "",
            nommoneda: "",
        };
    };
    return clsMonedas;
}());

//clase bus
var clsBUs = /** @class */ (function () {
    function clsBUs() {
    }
    clsBUs.prototype.contructor = function () {
        this.bu = {
            idbu: "",
            nombu: "",
        };
    };
    return clsBUs;
}());

//clase concepto
var clsConceptos = /** @class */ (function () {
    function clsConceptos() {
        this.concepto = {
            idconcepto: "",
            nomconcepto: "",
            tipoconcepto: "0",
        };
    }
    return clsConceptos;
}());

//clase lista de pedidos contiene una propiedad de tipo Array.
var clsListaPedidos = /** @class */ (function () {
    function clsListaPedidos() {
        this.listapedido = { pedido: null };
    }
    clsListaPedidos.prototype.addpedido = function (objectpedido) {
        if (this.listapedido.pedido == null) {
            this.listapedido.pedido = [objectpedido.pedido];
        }
        else {
            this.listapedido.pedido.unshift(objectpedido.pedido);
        }
    };
    clsListaPedidos.prototype.delpedido = function (opedido) {
        var idx = this.listapedido.pedido.indexOf(opedido);
        if (idx > -1) {
            this.listapedido.pedido.splice(idx, 1);
        }
    };
    clsListaPedidos.prototype.updatepedido = function (opedido, onewpedido) {
        opedido.pedido = onewpedido.pedido;
    };
    return clsListaPedidos;
}());

//clase pedidos................................................................
var clsPedidos = /** @class */ (function () {
    function clsPedidos() {
        var f = new Date();
        this.pedido = {
            id: __WEBPACK_IMPORTED_MODULE_0_guid_typescript__["Guid"].create().toString(),
            cliente: {
                idcliente: "",
                nomcliente: ""
            },
            observacion: "",
            vendedor: {
                idvendedor: "",
                nomvendedor: "",
            },
            moneda: {
                idmoneda: "",
                nommoneda: "",
            },
            bu: {
                idbu: "",
                nombu: "",
            },
            fecha: f.getFullYear() + '/' + (f.getMonth() + 1) + '/' + f.getDate(),
            lsitems: null,
            sincronizado: false,
            numeropedido: "",
            facturado: false,
            numerofactura: "",
            montototal: 0,
        };
    }
    Object.defineProperty(clsPedidos.prototype, "nomcliente", {
        get: function () {
            if (this.pedido.cliente.nomcliente == "") {
                return "";
            }
            else {
                return this.pedido.cliente.nomcliente;
            }
        },
        set: function (dato) {
            this.pedido.cliente.nomcliente = dato;
        },
        enumerable: true,
        configurable: true
    });
    clsPedidos.prototype.actualizarmontototal = function () {
        try {
            var montopedido = 0;
            this.pedido.lsitems.forEach(function (element) {
                montopedido = montopedido + element.montoitems;
            });
            this.pedido.montototal = montopedido;
        }
        catch (_a) {
            this.pedido.montototal = 0;
        }
    };
    clsPedidos.prototype.additem = function (objectitempedido) {
        if (this.pedido.lsitems == null) {
            this.pedido.lsitems = [objectitempedido.itempedido];
        }
        else {
            this.pedido.lsitems.unshift(objectitempedido.itempedido);
        }
        this.actualizarmontototal();
    };
    clsPedidos.prototype.modificaritem = function (objectitempedido, objectitempedidonew) {
        objectitempedido.itempedido = objectitempedido.itempedido;
        this.actualizarmontototal();
    };
    clsPedidos.prototype.delitem = function (oitem) {
        var idx = this.pedido.lsitems.indexOf(oitem);
        if (idx > -1) {
            this.pedido.lsitems.splice(idx, 1);
        }
        this.actualizarmontototal();
    };
    return clsPedidos;
}());

//clase Items del pedido ....................................................................................
var clsItemsPedido = /** @class */ (function () {
    function clsItemsPedido() {
        this.itempedido = {
            iditem: __WEBPACK_IMPORTED_MODULE_0_guid_typescript__["Guid"].create().toString(),
            concepto: {
                idconcepto: "",
                nomconcepto: "",
                tipoconcepto: "0",
            },
            cantidad: 0,
            preciounidad: 0,
            descuento: 0,
            impuestoventa: 0,
            impuestoconsumo: 0,
            montoitems: 0,
            totalbruto: 0,
            totaldescuento: 0,
            totaliva: 0,
            totalconsumo: 0,
        };
    }
    Object.defineProperty(clsItemsPedido.prototype, "nomconcepto", {
        get: function () {
            if (this.itempedido.concepto.nomconcepto == "") {
                return "";
            }
            else {
                return this.itempedido.concepto.nomconcepto;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(clsItemsPedido.prototype, "nomcliente", {
        set: function (dato) {
            this.itempedido.concepto.nomconcepto = dato;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(clsItemsPedido.prototype, "cantidad", {
        get: function () { return this.itempedido.cantidad; },
        set: function (dato) { this.itempedido.cantidad = dato; this.actualizartotales(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(clsItemsPedido.prototype, "preciounidad", {
        get: function () { return this.itempedido.preciounidad; },
        set: function (dato) { this.itempedido.preciounidad = dato; this.actualizartotales(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(clsItemsPedido.prototype, "descuento", {
        get: function () { return this.itempedido.descuento; },
        set: function (dato) { this.itempedido.descuento = dato; this.actualizartotales(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(clsItemsPedido.prototype, "impuestoventa", {
        get: function () { return this.itempedido.impuestoventa; },
        set: function (dato) { this.itempedido.impuestoventa = dato; this.actualizartotales(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(clsItemsPedido.prototype, "impuestoconsumo", {
        get: function () { return this.itempedido.impuestoconsumo; },
        set: function (dato) { this.itempedido.impuestoconsumo = dato; this.actualizartotales(); },
        enumerable: true,
        configurable: true
    });
    ;
    clsItemsPedido.prototype.actualizartotales = function () {
        this.itempedido.totalbruto = this.itempedido.cantidad * this.itempedido.preciounidad;
        this.itempedido.totaldescuento = this.itempedido.cantidad * this.itempedido.preciounidad * this.itempedido.descuento / 100;
        this.itempedido.totaliva = this.itempedido.cantidad * this.itempedido.preciounidad * this.itempedido.descuento / 100 * this.itempedido.impuestoventa / 100;
        this.itempedido.totalconsumo = this.itempedido.cantidad * this.itempedido.preciounidad * this.itempedido.descuento / 100 * this.itempedido.impuestoconsumo / 100;
        this.itempedido.montoitems = this.itempedido.cantidad * this.itempedido.preciounidad *
            (1 - this.itempedido.descuento / 100) * (1 + this.itempedido.impuestoventa / 100) *
            (1 + this.itempedido.impuestoconsumo / 100);
    };
    clsItemsPedido.prototype.validar = function () {
        return true;
    };
    return clsItemsPedido;
}());

//# sourceMappingURL=app.clases.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PedidoActionTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return action_marcarpedido_pendienteporactualziar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return action_obtener_pedidos_store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return action_actualizar_pedidos_store; });
/* unused harmony export action_cargar_lista */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return action_agregar_pedidos; });
/* unused harmony export action_sincronizar_pedidos */
/* unused harmony export action_seleccionar_pedidos */
/* unused harmony export action_additems_pedidos */
/* unused harmony export action_update_pedidos */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return action_eliminar_pedidos; });
/* harmony export (immutable) */ __webpack_exports__["a"] = PedidoReducer;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var PedidoActionTypes = {
    OBTENER_PEDIDOS_STORE: 'OBTENERPEDIDOSSTORE',
    ACTUALIZAR_PEDIDOS_STORE: 'ACTUALIZAR_PEDIDOS_STORE',
    AGREGAR_PEDIDOS: 'AGREGAR_PEDIDOS',
    SINCRONIZAR_PEDIDOS: 'SINCRONIZAR_PEDIDOS',
    MODIFICAR_PEDIDOS: 'MODIFICAR_PEDIDOS',
    ELIMINAR_PEDIDOS: 'ELIMINAR_PEDIDOS',
    AGREGAR_ITEMS_PEDIDO: 'AGREGAR_ITEMS_PEDIDO',
    ELIMINAR_ITEMS_PEDIDO: 'ELIMINAR_ITEMS_PEDIDO',
    MODIFICAR_ITEMS_PEDIDO: 'MODIFICAR_ITEMS_PEDIDO',
    ERROR: 'PEDIDO_ERROR',
    CARGAR_PEDIDOS: 'CARGAR_PEDIDOS',
    SELECCIONAR_PEDIDOS: 'SELECCIONAR_PEDIDOS',
    SELECCIONAR_ITEMS_PEDIDO: 'SELECCIONAR_ITEMS_PEDIDO',
    MARCARPEDIDO_PENDIENTE_ACTUALIZAR: 'MARCARPEDIDO_PENDIENTE_ACTUALIZAR'
};
var initialState = {
    cargado: false,
    actualizado: false,
    pedidoseleccionado: null,
    itemsseleccionado: null,
    ListaPedidos: null,
};
var action_marcarpedido_pendienteporactualziar = /** @class */ (function () {
    function action_marcarpedido_pendienteporactualziar() {
        this.type = PedidoActionTypes.MARCARPEDIDO_PENDIENTE_ACTUALIZAR;
    }
    return action_marcarpedido_pendienteporactualziar;
}());

var action_obtener_pedidos_store = /** @class */ (function () {
    function action_obtener_pedidos_store(olistapedido) {
        this.type = PedidoActionTypes.OBTENER_PEDIDOS_STORE;
        this.olistapedido = olistapedido;
    }
    return action_obtener_pedidos_store;
}());

var action_actualizar_pedidos_store = /** @class */ (function () {
    function action_actualizar_pedidos_store() {
        this.type = PedidoActionTypes.ACTUALIZAR_PEDIDOS_STORE;
    }
    return action_actualizar_pedidos_store;
}());

var action_cargar_lista = /** @class */ (function () {
    function action_cargar_lista(Listapedidos) {
        this.type = PedidoActionTypes.CARGAR_PEDIDOS;
        this.Lspedidos = Listapedidos;
    }
    return action_cargar_lista;
}());

var action_agregar_pedidos = /** @class */ (function () {
    function action_agregar_pedidos(opedido) {
        this.type = PedidoActionTypes.AGREGAR_PEDIDOS;
        this.opedido = opedido;
    }
    return action_agregar_pedidos;
}());

var action_sincronizar_pedidos = /** @class */ (function () {
    function action_sincronizar_pedidos(Listapedidos, Pedido) {
        this.type = PedidoActionTypes.SINCRONIZAR_PEDIDOS;
        this.Lspedidos = Listapedidos;
        this.pedido = Pedido;
    }
    return action_sincronizar_pedidos;
}());

var action_seleccionar_pedidos = /** @class */ (function () {
    function action_seleccionar_pedidos(opedido) {
        this.type = PedidoActionTypes.SELECCIONAR_PEDIDOS;
        this.opedido = opedido;
    }
    return action_seleccionar_pedidos;
}());

var action_additems_pedidos = /** @class */ (function () {
    function action_additems_pedidos(oitem) {
        this.type = PedidoActionTypes.AGREGAR_ITEMS_PEDIDO;
        this.oitem = oitem;
    }
    return action_additems_pedidos;
}());

var action_update_pedidos = /** @class */ (function () {
    function action_update_pedidos(opedido) {
        this.type = PedidoActionTypes.MODIFICAR_PEDIDOS;
        this.opedido = opedido;
    }
    return action_update_pedidos;
}());

var action_eliminar_pedidos = /** @class */ (function () {
    function action_eliminar_pedidos(opedido) {
        this.type = PedidoActionTypes.ELIMINAR_PEDIDOS;
        this.opedido = opedido;
    }
    return action_eliminar_pedidos;
}());

function PedidoReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case PedidoActionTypes.OBTENER_PEDIDOS_STORE:
            return __assign({}, state, { ListaPedidos: action.olistapedido, cargado: true });
        case PedidoActionTypes.AGREGAR_PEDIDOS:
            state.ListaPedidos.addpedido(action.opedido);
            return __assign({}, state, { actualizado: true });
        case PedidoActionTypes.SELECCIONAR_PEDIDOS:
            return __assign({}, state, { pedidoseleccionado: action.opedido, actualizado: false });
        case PedidoActionTypes.AGREGAR_ITEMS_PEDIDO:
            //adicionando items al pedido seleccionado!
            state.pedidoseleccionado.modificaritem(state.itemsseleccionado, action.oitem);
            return __assign({}, state, { actualizado: false });
        case PedidoActionTypes.MODIFICAR_ITEMS_PEDIDO:
            //adicionando items al pedido seleccionado!
            state.pedidoseleccionado.additem(action.oitem);
            return __assign({}, state, { actualizado: false });
        case PedidoActionTypes.ACTUALIZAR_PEDIDOS_STORE:
            return __assign({}, state, { actualizado: false });
        case PedidoActionTypes.MODIFICAR_PEDIDOS:
            state.ListaPedidos.updatepedido(state.pedidoseleccionado, action.opedido);
            return __assign({}, state, { actualizado: true });
        case PedidoActionTypes.ELIMINAR_PEDIDOS:
            state.ListaPedidos.delpedido(action.opedido);
            return __assign({}, state, { actualizado: true });
        case PedidoActionTypes.MARCARPEDIDO_PENDIENTE_ACTUALIZAR:
            return __assign({}, state, { actualizado: true });
        default:
            return __assign({}, state, { actualizado: false });
    }
}
//# sourceMappingURL=ReducerPedido.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ConsultarAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ConsultarActionClientes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ConsultarActionprecios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ConsultarActionparametros; });
/* harmony export (immutable) */ __webpack_exports__["g"] = conceptoReducer;
/* harmony export (immutable) */ __webpack_exports__["f"] = clientesreducer;
/* harmony export (immutable) */ __webpack_exports__["i"] = preciosreducer;
/* harmony export (immutable) */ __webpack_exports__["h"] = parametrosreducer;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var ActionTypes = {
    CONSULTAR: 'CONSULTAR',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    CLIENTES_CONSULTAR: 'CLIENTES_CONSULTAR',
    CLIENTES_SUCCES: 'CLIENTES_SUCCES',
    CLIENTES_ERROR: 'CLIENTES_ERROR',
    PRECIOS_CONSULTAR: 'PRECIOS_CONSULTAR',
    PRECIOS_SUCCES: 'PRECIOS_SUCCES',
    PRECIOS_ERROR: 'PRECIOS_ERROR',
    PARAMETROS_CONSULTAR: 'PARAMETROS_CONSULTAR',
    PARAMATEROS_SUCCES: 'PARAMETROS_SUCCES',
    PARAMETROS_ERROR: 'PARAMETROS_ERROR'
};
var initialState = {
    loading: true,
    error: false,
    conceptos: null
};
var initialStatecliente = {
    loading: true,
    error: false,
    clientes: null
};
var initialStateprecios = {
    loading: true,
    error: false,
    precios: null
};
var initialStateparametros = {
    loading: true,
    error: false,
    parametros: null
};
//manejo de acciones por estados
var ConsultarAction = /** @class */ (function () {
    function ConsultarAction(entidad, maxtimestamp, fecha, vendedor) {
        this.entidad = entidad;
        this.maxtimestamp = maxtimestamp;
        this.fecha = fecha;
        this.vendedor = vendedor;
        this.type = ActionTypes.CONSULTAR;
    }
    return ConsultarAction;
}());

var ConsultarActionClientes = /** @class */ (function () {
    function ConsultarActionClientes(entidad, maxtimestamp, fecha, vendedor) {
        this.entidad = entidad;
        this.maxtimestamp = maxtimestamp;
        this.fecha = fecha;
        this.vendedor = vendedor;
        this.type = ActionTypes.CLIENTES_CONSULTAR;
    }
    return ConsultarActionClientes;
}());

var ConsultarActionprecios = /** @class */ (function () {
    function ConsultarActionprecios(entidad, maxtimestamp, fecha, vendedor) {
        this.entidad = entidad;
        this.maxtimestamp = maxtimestamp;
        this.fecha = fecha;
        this.vendedor = vendedor;
        this.type = ActionTypes.PRECIOS_CONSULTAR;
    }
    return ConsultarActionprecios;
}());

var ConsultarActionparametros = /** @class */ (function () {
    function ConsultarActionparametros(entidad, maxtimestamp, fecha, vendedor) {
        this.entidad = entidad;
        this.maxtimestamp = maxtimestamp;
        this.fecha = fecha;
        this.vendedor = vendedor;
        this.type = ActionTypes.PARAMETROS_CONSULTAR;
    }
    return ConsultarActionparametros;
}());

//Manejod e reducer por cada acción y estados!
function conceptoReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ActionTypes.CONSULTAR:
            return __assign({}, state, { loading: true });
        case ActionTypes.SUCCESS:
            return __assign({}, state, { conceptos: action.concepto, error: false, loading: false });
        case ActionTypes.ERROR:
            return __assign({}, state, { loading: false, error: true });
        default:
            return state;
    }
}
function clientesreducer(state, action) {
    if (state === void 0) { state = initialStatecliente; }
    switch (action.type) {
        case ActionTypes.CLIENTES_CONSULTAR:
            return __assign({}, state, { loading: true });
        case ActionTypes.CLIENTES_SUCCES:
            return __assign({}, state, { clientes: action.oclientes, error: false, loading: false });
        case ActionTypes.CLIENTES_ERROR:
            return __assign({}, state, { loading: false, error: true });
        default:
            return state;
    }
}
function preciosreducer(state, action) {
    if (state === void 0) { state = initialStateprecios; }
    switch (action.type) {
        case ActionTypes.PRECIOS_CONSULTAR:
            return __assign({}, state, { loading: true });
        case ActionTypes.PRECIOS_SUCCES:
            return __assign({}, state, { precios: action.oprecios, error: false, loading: false });
        case ActionTypes.PRECIOS_ERROR:
            return __assign({}, state, { loading: false, error: true });
        default:
            return state;
    }
}
function parametrosreducer(state, action) {
    if (state === void 0) { state = initialStateparametros; }
    switch (action.type) {
        case ActionTypes.PARAMETROS_CONSULTAR:
            return __assign({}, state, { loading: true });
        case ActionTypes.PARAMATEROS_SUCCES:
            return __assign({}, state, { parametros: action.oparametros, error: false, loading: false });
        case ActionTypes.PARAMETROS_ERROR:
            return __assign({}, state, { loading: false, error: true });
        default:
            return state;
    }
}
//# sourceMappingURL=z.reducer.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Outh2Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Outh2Service = /** @class */ (function () {
    // Extending the HttpClient through the Angular DI.
    function Outh2Service(_storage) {
        this._storage = _storage;
        // If you don't want to use the extended versions in some cases you can access the public property and use the original one.
        // for ex. this.httpClient.http.get(...)
    }
    Outh2Service.prototype.GetToken = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(this._storage.get('token'));
    };
    Outh2Service.prototype.GetOauth2Credencial = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(this._storage.get('OuthCredencial'));
    };
    Outh2Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], Outh2Service);
    return Outh2Service;
}());

//# sourceMappingURL=outh2.service.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjustesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjustesPage = /** @class */ (function () {
    function AjustesPage(storage, navCtrl, navParams) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AjustesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AjustesPage');
        this.consultarstore();
    };
    AjustesPage.prototype.consultarstore = function () {
        var _this = this;
        //opteniendo propiedad sis e guarda credenciales!
        this.storage.get('chkguardarcredenciales').then(function (val) {
            _this.chkguardarcredenciales = val;
        });
        //opteniendo propiedad sis e guarda credenciales!
        this.storage.get('chkreportarautomatico').then(function (val) {
            _this.chkreportarautomatico = val;
        });
        //opteniendo propiedad sis e guarda credenciales!
        this.storage.get('strkeyactivacion').then(function (val) {
            _this.strkeyactivacion = val;
        });
    };
    AjustesPage.prototype.actualziaconfioguracion = function () {
        this.storage.set('chkguardarcredenciales', this.chkguardarcredenciales);
        this.storage.set('chkreportarautomatico', this.chkreportarautomatico);
        this.storage.set('strkeyactivacion', this.strkeyactivacion);
        this.closepagina();
    };
    AjustesPage.prototype.closepagina = function () {
        //this.navCtrl.setRoot(HomePage);
        //this.navCtrl.popToRoot();
        this.navCtrl.pop();
    };
    AjustesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ajustes',template:/*ion-inline-start:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\ajustes\ajustes.html"*/'<!--\n  Generated template for the AjustesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Configuración</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-list>\n      <ion-list-header>\n        Datos de configuración\n      </ion-list-header>\n      <ion-item>\n        <ion-toggle [(ngModel)]="chkguardarcredenciales" enabled></ion-toggle>\n        <ion-label>\n          Guardar credenciales\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-toggle [(ngModel)]="chkreportarautomatico" enabled></ion-toggle>\n        <ion-label>\n          Reporte automatico\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-list>\n      <ion-list-header>\n        Active su programa\n      </ion-list-header>\n      <ion-item>\n        <ion-label floating>Key Activación</ion-label>\n        <ion-input [(ngModel)]="strkeyactivacion" type="text"></ion-input>\n        <button ion-button item-end>\n          <ion-icon name="qr-scanner"></ion-icon>\n        </button>\n      </ion-item>\n      <ion-item>\n        <button ion-button (click)="actualziaconfioguracion()">\n          <!-->\n          <ion-icon name="checkmark"></ion-icon>\n          </!-->\n          Aceptar\n        </button>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\ajustes\ajustes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AjustesPage);
    return AjustesPage;
}());

//# sourceMappingURL=ajustes.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfigPage = /** @class */ (function () {
    function ConfigPage(navCtrl, navParams, _storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._storage = _storage;
        this.config = { clientId: "", grantType: "", scope: "" };
        this._storage.get('OuthCredencial').then(function (val) {
            if (val != null) {
                _this.config = val;
            }
            _this.config = { clientId: "Development", grantType: "password", scope: "openid offline_access WebAPI profile roles" };
        });
    }
    ConfigPage.prototype.save = function () {
        this._storage.set("OuthCredencial", this.config);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    ConfigPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfigPage');
    };
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\config\config.html"*/'<!--\n  Generated template for the ConfigPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Configuracion Credenciales Outh2</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          Estas credenciales debe ser sumistradas por Zeus Tecnologias, por favor asegurelas.  \n        </ion-card-header>      \n        <ion-card-content>\n          <!-- Add card content here! -->\n        </ion-card-content>      \n      </ion-card>\n    <ion-item>\n        <ion-label floating>Client id</ion-label>\n        <ion-input type="text" id="name"required [(ngModel)]="config.clientId" name="clientId"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Grant type</ion-label>\n        <ion-input type="text" id="name"required [(ngModel)]="config.grantType" name="grantType"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Scope</ion-label>\n        <ion-input type="text" id="name" [(ngModel)]="config.scope" name="scope"></ion-input>\n    </ion-item>\n    <ion-item>\n        <button no-lines ion-button full (click)=\'save()\'>Guardar</button>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\config\config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recordpedido_recordpedido__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rdxpedidos_ReducerPedido__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_clases__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PedidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedidosPage = /** @class */ (function () {
    function PedidosPage(storage, store, navCtrl, navParams) {
        this.storage = storage;
        this.store = store;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storecargadoporprimeravez = false;
        this.olistapedidos = new (__WEBPACK_IMPORTED_MODULE_5__app_app_clases__["b" /* clsListaPedidos */]);
        this.cargarpedidosdelstrore();
    }
    PedidosPage.prototype.ionViewDidEnter = function () {
        this.subscripcionstorage();
    };
    PedidosPage.prototype.subscripcionstorage = function () {
        var _this = this;
        this.store.select('listapedidos')
            .subscribe(function (estado) {
            _this.actualizarstorage(estado);
        });
    };
    PedidosPage.prototype.actualizarstorage = function (estado) {
        try {
            if (estado != null) {
                if (estado.ListaPedidos != null) {
                    if (estado.cargado && estado.actualizado)
                        if (estado.ListaPedidos.listapedido.pedido != null) {
                            console.log(JSON.stringify(estado.ListaPedidos));
                            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__rdxpedidos_ReducerPedido__["b" /* action_actualizar_pedidos_store */]());
                            this.storage.set('storeListaPedidos', JSON.parse(JSON.stringify(estado.ListaPedidos)));
                        }
                }
            }
        }
        catch (err) { }
    };
    PedidosPage.prototype.cargarpedidosdelstrore = function () {
        var _this = this;
        try {
            this.storage.get('storeListaPedidos').then(function (val) {
                if (val != null) {
                    var newpedidos = new (__WEBPACK_IMPORTED_MODULE_5__app_app_clases__["b" /* clsListaPedidos */]);
                    newpedidos = val;
                    _this.olistapedidos.listapedido = newpedidos.listapedido;
                }
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__rdxpedidos_ReducerPedido__["f" /* action_obtener_pedidos_store */](_this.olistapedidos));
            });
        }
        catch (err) { }
    };
    PedidosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedidosPage');
    };
    PedidosPage.prototype.ionViewDidActive = function () {
        console.log('Activando la pagina de pedidos');
    };
    PedidosPage.prototype.gotorecordpedido = function (opedido) {
        var modoedicion;
        modoedicion = "edit";
        if (opedido == null) {
            modoedicion = "add";
        }
        ;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__recordpedido_recordpedido__["a" /* RecordpedidoPage */], { modo: modoedicion, pedido: opedido });
    };
    PedidosPage.prototype.eliminarpedidos = function (opedido) {
        this.olistapedidos.delpedido(opedido);
    };
    PedidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pedidos',template:/*ion-inline-start:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\pedidos\pedidos.html"*/'<!--\n  Generated template for the PedidosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <ion-title text-center>Pedidos\n      </ion-title>    \n  </ion-navbar>\n</ion-header>\n<ion-content padding class="card-background-page">\n    <ion-fab top right edge (click)="gotorecordpedido(null)">\n        <button ion-fab mini><ion-icon name="add" ></ion-icon></button>\n      </ion-fab>\n    <ion-list>\n        <ion-list-header>\n            PEDIDOS SIN REPORTAR\n          </ion-list-header>\n          <ion-item-sliding *ngFor="let p of olistapedidos.listapedido.pedido" >\n              <ion-item aria-multiline="true">\n                <h3><b>{{p.cliente.nomcliente}}</b></h3>\n                      <p >Total:{{p.montototal| currency:\'\':\'symbol\':\'1.2-2\'}} Fecha:{{p.fecha}}</p>\n              </ion-item>\n              <ion-item-options side="right">\n                <button ion-button color="danger" (click)="eliminarpedidos(p)"> \n                  <ion-icon name="trash"></ion-icon>\n                  Eliminar\n                </button>\n              </ion-item-options>\n              <ion-item-options side="left" >\n                <button ion-button color="primary">\n                  <ion-icon name="arrow-round-up"></ion-icon>\n                  Reportar\n                </button>\n                <button ion-button color="secondary" (click)="gotorecordpedido(p)">\n                  <ion-icon name="arrow-round-up"></ion-icon>\n                  Editar\n                </button>\n              </ion-item-options>\n            </ion-item-sliding>\n\n      </ion-list>\n</ion-content>'/*ion-inline-end:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\pedidos\pedidos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PedidosPage);
    return PedidosPage;
}());

//# sourceMappingURL=pedidos.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordpedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_item__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buscar_buscar__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rdxbuscar_ReducerBuscar__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rdxpedidos_ReducerPedido__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_clases__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the RecordpedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecordpedidoPage = /** @class */ (function () {
    function RecordpedidoPage(alertCtrl, storage, navCtrl, navParams, store) {
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.opedido = new (__WEBPACK_IMPORTED_MODULE_7__app_app_clases__["c" /* clsPedidos */]);
        if (this.navParams.get("pedido") != null) {
            this.opedido.pedido = this.navParams.get("pedido");
        }
    }
    RecordpedidoPage.prototype.ionViewDidLoad = function () { console.log('ionViewDidLoad RecordpedidoPage'); };
    RecordpedidoPage.prototype.ionViewDidEnter = function () {
        this.subscripcionbusqueda();
    };
    RecordpedidoPage.prototype.ionViewDidLeave = function () {
    };
    RecordpedidoPage.prototype.puedoagregaritems = function () {
        try {
            if (this.opedido.nomcliente != "") {
                return true;
            }
            return false;
        }
        catch (_a) {
            return false;
        }
    };
    RecordpedidoPage.prototype.gotoedititem = function (oitem) {
        // this.store.dispatch(new action_seleccionar_pedidos(this.opedido));
        if (oitem != null) {
            this.modoitem = "edit";
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_item__["a" /* ItemPage */], { modo: this.modoitem, oitem: oitem, opedido: this.opedido });
        }
        else {
            this.modoitem = "add";
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_item__["a" /* ItemPage */], { modo: this.modoitem, oitem: null, opedido: this.opedido });
        }
    };
    RecordpedidoPage.prototype.eliminaritems = function (oitem) {
        debugger;
        this.opedido.delitem(oitem);
    };
    RecordpedidoPage.prototype.showAlert = function (titulo, descripcion) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: descripcion,
            buttons: ['OK']
        });
        alert.present();
    };
    RecordpedidoPage.prototype.validarpedido = function () {
        if (this.opedido.nomcliente == "") {
            this.showAlert('validación', 'Seleccione cliente');
            return false;
        }
        try {
            if (this.opedido.pedido.lsitems.length == 0) {
                this.showAlert('validación', 'Ingrese Items del pedido');
                return false;
            }
        }
        catch (err) {
            this.showAlert('validación', 'Ingrese Items del pedido');
            return false;
        }
        return true;
    };
    RecordpedidoPage.prototype.aceptarpedido = function () {
        if (this.validarpedido()) {
            if (this.navParams.get("modo") == "add") {
                this.agregarpedido();
            }
            else {
                this.actualizarpedido();
            }
        }
    };
    RecordpedidoPage.prototype.actualizarpedido = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__rdxpedidos_ReducerPedido__["e" /* action_marcarpedido_pendienteporactualziar */]());
        this.opedido = JSON.parse(JSON.stringify(this.opedido));
        this.navCtrl.pop();
    };
    RecordpedidoPage.prototype.eliminarpedido = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__rdxpedidos_ReducerPedido__["d" /* action_eliminar_pedidos */](JSON.parse(JSON.stringify(this.opedido))));
        this.navCtrl.pop();
    };
    RecordpedidoPage.prototype.agregarpedido = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__rdxpedidos_ReducerPedido__["c" /* action_agregar_pedidos */](JSON.parse(JSON.stringify(this.opedido))));
        this.navCtrl.pop();
    };
    RecordpedidoPage.prototype.closepagina = function () {
        this.navCtrl.pop();
    };
    RecordpedidoPage.prototype.gotobuscarcliente = function () {
        this.gotobuscar('Cliente_recod_pedido', 'clientes');
    };
    RecordpedidoPage.prototype.gotobuscar = function (quienbusca, tipobusqueda) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__rdxbuscar_ReducerBuscar__["c" /* actionbuscar_buscar */](quienbusca, tipobusqueda));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__buscar_buscar__["a" /* BuscarPage */]);
    };
    RecordpedidoPage.prototype.subscripcionbusqueda = function () {
        var _this = this;
        this.store.select('estadobusqueda')
            .subscribe(function (estado) {
            _this.obtenerresultadobusqueda(estado);
        });
    };
    RecordpedidoPage.prototype.obtenerresultadobusqueda = function (estado) {
        try {
            if (estado != null) {
                if (estado.buscar != null) {
                    if (estado.buscar.clasebusqueda == "clientes") {
                        switch (estado.buscar.solicitante) {
                            case 'Cliente_recod_pedido':
                                this.opedido.pedido.cliente = {
                                    idcliente: estado.buscar.datosbusqueda.iditem,
                                    nomcliente: estado.buscar.datosbusqueda.descripcion
                                };
                                this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__rdxbuscar_ReducerBuscar__["d" /* actionbuscar_terminar */]());
                                return;
                        }
                        this.estadobuscar = estado;
                    }
                }
            }
        }
        catch (err) { }
    };
    RecordpedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-recordpedido',template:/*ion-inline-start:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\recordpedido\recordpedido.html"*/'<!--\n  Generated template for the RecordpedidoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Registro de Pedidos</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-card>\n      <ion-list no-lines>\n        <button ion-item (click)="gotobuscarcliente()">\n          <ion-icon name="search" item-start></ion-icon>\n          <ion-input [(ngModel)]="opedido.nomcliente" placeholder="Especifique cliente"> </ion-input>\n        </button>\n      </ion-list>\n    </ion-card>\n    <ion-item>\n      <ion-label floating>\n        Observacion\n      </ion-label>\n      <ion-textarea [(ngModel)]="opedido.pedido.observacion">\n      </ion-textarea>\n    </ion-item>\n    <ion-list-header>\n      <h2>ITEMS Total:{{opedido.pedido.montototal| currency:\'\':\'symbol\':\'1.2-2\'}}</h2>\n    </ion-list-header>\n    <ion-item no-lines>\n      <button [disabled]="!puedoagregaritems()" ion-button mini item-start (click)="gotoedititem(null)">\n        <ion-icon name="add"></ion-icon>\n        Agregar Items\n      </button>\n    </ion-item>\n    <ion-item-sliding *ngFor="let i of opedido.pedido.lsitems">\n      <ion-item>\n        <h3>\n          <b>{{i.concepto.nomconcepto}}</b>\n        </h3>\n        <p>\n          {{i.cantidad}} por {{i.preciounidad| currency:\'\':\'symbol\':\'1.2-2\'}} Total {{i.montoitems| currency:\'\':\'symbol\':\'1.2-2\'}} %dcto:{{i.descuento}} iva:{{i.impuestoventa}}% inc:{{i.impuestoconsumo}}%\n        </p>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="eliminaritems(i)">\n          <!--><ion-icon name="trash"></ion-icon></!-->\n          Eliminar\n        </button>\n      </ion-item-options>\n      <ion-item-options side="left">\n        <button ion-button color="primary" (click)="gotoedititem(i)">\n          <!--><ion-icon name="create"></ion-icon></!-->\n          Modificar\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <button ion-button mini item-end (click)="aceptarpedido()">\n            <!--><ion-icon name="checkmark"></ion-icon></!-->\n            Aceptar\n          </button>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item no-lines>\n          <button ion-button mini color="danger" item-start (click)="closepagina()">\n           <!--> <ion-icon name="close"></ion-icon></!-->\n            Cancelar\n          </button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\recordpedido\recordpedido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]])
    ], RecordpedidoPage);
    return RecordpedidoPage;
}());

//# sourceMappingURL=recordpedido.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buscar_buscar__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rdxbuscar_ReducerBuscar__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_clases__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Redux - stores + observables

//Redux - Busqueda en toda la aplicación.




/**
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemPage = /** @class */ (function () {
    function ItemPage(alertCtrl, navCtrl, formBuilder, navParams, store) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.store = store;
        this.formitem = this.formBuilder.group({
            cliente: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required],
            cantidad: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required])],
            preciounidad: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required],
            descuento: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].max(100)])],
            impuestoventa: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].max(100)])],
            impuestoconsumo: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].max(100)])],
        });
        this.opedido = new (__WEBPACK_IMPORTED_MODULE_5__app_app_clases__["c" /* clsPedidos */]);
        this.oitem = new (__WEBPACK_IMPORTED_MODULE_5__app_app_clases__["a" /* clsItemsPedido */]);
        if (this.navParams.get("modo") == "edit") {
            this.oitem.itempedido = this.navParams.get("oitem");
        }
        this.opedido = this.navParams.get("opedido");
    }
    Object.defineProperty(ItemPage.prototype, "precio", {
        get: function () {
            try {
                return this.oitem.preciounidad.toString();
            }
            catch (err) {
                return "0";
            }
        },
        set: function (dato) {
            try {
                this.oitem.preciounidad = parseFloat(dato.replace(/[^0123456789.-]/, ''));
            }
            catch (err) {
                this.oitem.preciounidad = 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    ItemPage.prototype.buscarproductos = function () {
        this.gotobuscar('producto_recod_item', 'productos');
    };
    ItemPage.prototype.validaritems = function () {
        try {
            if (this.oitem.nomconcepto == '') {
                this.showAlert('validacion', 'Seleccione producto');
                return false;
            }
        }
        catch (err) {
            this.showAlert('validacion', 'Seleccione producto');
            return false;
        }
        return true;
    };
    ItemPage.prototype.aceptar = function () {
        if (this.validaritems()) {
            if (this.navParams.get("modo") == "edit") {
                this.oitem = JSON.parse(JSON.stringify(this.oitem));
                this.opedido.actualizarmontototal();
            }
            else {
                this.opedido.additem(JSON.parse(JSON.stringify(this.oitem)));
            }
            this.closepagina();
        }
    };
    ItemPage.prototype.closepagina = function () {
        this.navCtrl.pop();
    };
    ItemPage.prototype.ionViewDidEnter = function () {
        this.subscripcionbusqueda();
    };
    ItemPage.prototype.gotobuscar = function (quienbusca, tipobusqueda) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__rdxbuscar_ReducerBuscar__["c" /* actionbuscar_buscar */](quienbusca, tipobusqueda));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__buscar_buscar__["a" /* BuscarPage */]);
    };
    ItemPage.prototype.showAlert = function (titulo, descripcion) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: descripcion,
            buttons: ['OK']
        });
        alert.present();
    };
    ItemPage.prototype.subscripcionbusqueda = function () {
        var _this = this;
        this.store.select('estadobusqueda')
            .subscribe(function (estado) {
            _this.obtenerresultadobusqueda(estado);
        });
    };
    ItemPage.prototype.obtenerresultadobusqueda = function (estado) {
        try {
            if (estado != null) {
                if (estado.buscar != null) {
                    if (estado.buscar.clasebusqueda == "productos") {
                        switch (estado.buscar.solicitante) {
                            case 'producto_recod_item':
                                if (this.oitem.itempedido.concepto.idconcepto != estado.buscar.datosbusqueda.iditem) {
                                    this.oitem.itempedido.concepto = {
                                        idconcepto: estado.buscar.datosbusqueda.iditem,
                                        nomconcepto: estado.buscar.datosbusqueda.descripcion,
                                        tipoconcepto: "0"
                                    };
                                    //asignado propiedades para validación!.
                                    this.aplicaiva = estado.buscar.datosbusqueda.dato.aplicaiva;
                                    this.aplicainc = estado.buscar.datosbusqueda.dato.aplicainc;
                                    this.ivadefault = estado.buscar.datosbusqueda.dato.ivadefault;
                                    this.incdefault = estado.buscar.datosbusqueda.dato.incdefault;
                                    //asignado caracteristicas al productos!
                                    this.oitem.itempedido.cantidad = 1;
                                    this.oitem.itempedido.impuestoventa = this.ivadefault;
                                    this.oitem.itempedido.impuestoconsumo = this.incdefault;
                                    this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__rdxbuscar_ReducerBuscar__["d" /* actionbuscar_terminar */]());
                                }
                                return;
                        }
                    }
                }
            }
        }
        catch (err) { }
    };
    ItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-item',template:/*ion-inline-start:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\item\item.html"*/'<!--\n  Generated template for the ItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Item</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n\n  <form [formGroup]="formitem">\n\n    <!--\n    <ion-card>\n        <button ion-item (click)="buscarproductos()">\n        <ion-icon mini name="search" item-end></ion-icon>\n        <ion-input formControlName="cliente" [(ngModel)]="oitem.nomconcepto"></ion-input>\n      </button> \n    </ion-card>\n-->\n\n    <ion-card>\n      <ion-list>\n        <button ion-item (click)="buscarproductos()">\n          <ion-icon name="search" item-start></ion-icon>\n          <ion-input formControlName="cliente" [(ngModel)]="oitem.nomconcepto" placeholder="Especifique productos"> </ion-input>\n        </button>\n      </ion-list>\n    </ion-card>\n\n    <ion-item>\n      <ion-label floating>\n        Cantidad\n      </ion-label>\n      <ion-input formControlName="cantidad" [(ngModel)]="oitem.cantidad" class="znumeric" type="text" [zformat]="{tipo:\'numerico\',simbolodecimal:\'.\',simbolomiles:\',\',decimales:2,longitud:0}">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        Precio unidad\n      </ion-label>\n      <ion-input formControlName="preciounidad" [(ngModel)]="precio" class="znumeric" type="text" [zformat]="{tipo:\'numerico\',simbolodecimal:\'.\',simbolomiles:\',\',decimales:2,longitud:0}">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        % Descuento\n      </ion-label>\n      <ion-input formControlName="descuento" [(ngModel)]="oitem.descuento" class="znumeric" type="text" [zformat]="{tipo:\'numerico\',simbolodecimal:\'.\',simbolomiles:\',\',decimales:2,longitud:0}">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        % IVA\n      </ion-label>\n      <ion-input [disabled]="!aplicaiva" formControlName="impuestoventa" [(ngModel)]="oitem.impuestoventa" class="znumeric" type="text" [zformat]="{tipo:\'numerico\',simbolodecimal:\'.\',simbolomiles:\',\',decimales:2,longitud:0}">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        % INC\n      </ion-label>\n      <ion-input [disabled]="!aplicainc" formControlName="impuestoconsumo" [(ngModel)]="oitem.impuestoconsumo" class="znumeric" type="text" [zformat]="{tipo:\'numerico\',simbolodecimal:\'.\',simbolomiles:\',\',decimales:2,longitud:0}">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col></ion-col>\n        <ion-col>\n          <button ion-button icon-right [disabled]="!formitem.valid" (click)="aceptar()">Aceptar\n            <ion-icon name="checkmark"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-item>\n\n\n  </form>\n</ion-content>\n\n<!-->\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <ion-item no-lines>\n          <button ion-fab mini item-end (click)="aceptar()">\n            <ion-icon name="checkmark"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item no-lines>\n          <button ion-fab mini color="danger" item-start (click)="closepagina()">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n</!-->'/*ion-inline-end:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\item\item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]])
    ], ItemPage);
    return ItemPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {InappBrowerPage} from '../pages/inapp-brower';
/**
 * Generated class for the WebviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//how to use it?
/*https://github.com/bitpay/cordova-plugin-qrscanner/issues/147*/
var WebviewPage = /** @class */ (function () {
    function WebviewPage(navCtrl, navParams, qrScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.qrCode = "no se ha detectado nada";
    }
    WebviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WebviewPage');
        console.info('ionViewDidLoad WebviewPage');
        console.warn('ionViewDidLoad WebviewPage');
        this.readQr();
    };
    WebviewPage.prototype.readQr = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                _this.qrScanner.show();
                window.document.querySelector('ion-app').classList.add('transparent-body');
                // start scanning
                console.log('Acceso concedido, se intentara leer el codigo');
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    _this.qrCode = text;
                    alert(text);
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                    window.document.querySelector('ion-app').classList.remove('transparent-body');
                });
            }
            else if (status.denied) {
                alert('debe permitir el acceso, para proceder a leer el codigo QR');
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) {
            //console.error('Error is', e);
            alert(e);
            _this.qrCode = e;
        });
    };
    WebviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-webview',template:/*ion-inline-start:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\webview\webview.html"*/'<!--\n  Generated template for the WebviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>webview</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content paddingm>\n	<input type="text"  [(ngModel)]="qrCode"  >\n	<button ion-button item-end  (click)="readQr()">Leer Código Qr</button>    \n</ion-content>\n'/*ion-inline-end:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\webview\webview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */]])
    ], WebviewPage);
    return WebviewPage;
}());

//# sourceMappingURL=webview.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(storage, navCtrl, navParams, alertCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
        this.consultandostore();
    };
    PerfilPage.prototype.consultandostore = function () {
        var _this = this;
        this.storage.get('strnombre').then(function (val) {
            _this.strnombre = val;
        });
        this.storage.get('strvendedor').then(function (val) {
            _this.strvendedor = val;
        });
        this.storage.get('strbu').then(function (val) {
            _this.strbu = val;
        });
        this.storage.get('strbodega').then(function (val) {
            _this.strbodega = val;
        });
        this.storage.get('strpassword').then(function (val) {
            _this.strpassword = val;
        });
        this.storage.get('strconfirmpassword').then(function (val) {
            _this.strconfirmpassword = val;
        });
    };
    PerfilPage.prototype.actualizarstore = function () {
        if (this.validar()) {
            this.storage.set('strnombre', this.strnombre);
            this.storage.set('strvendedor', this.strvendedor);
            this.storage.set('strbu', this.strbu);
            this.storage.set('strbodega', this.strbodega);
            this.storage.set('strpassword', this.strpassword);
            this.storage.set('strconfirmpassword', this.strconfirmpassword);
            this.closepagina();
        }
    };
    PerfilPage.prototype.validar = function () {
        if (!this.passwordiguales()) {
            this.showAlertok('validación', 'password no coincide');
            return false;
        }
        return true;
    };
    PerfilPage.prototype.showAlertok = function (stitle, ssubtitle) {
        var alert = this.alertCtrl.create({
            title: stitle,
            subTitle: ssubtitle,
            buttons: ['OK']
        });
        alert.present();
    };
    PerfilPage.prototype.passwordiguales = function () {
        if (this.strpassword == this.strconfirmpassword) {
            return true;
        }
        else {
            return false;
        }
    };
    PerfilPage.prototype.closepagina = function () {
        //this.navCtrl.setRoot(HomePage);
        //this.navCtrl.popToRoot();
        this.navCtrl.pop();
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\perfil\perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Perfil</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-list-header>\n            <ion-avatar item-start>\n                <img src="../../assets/imgs/logo.png">\n            </ion-avatar>\n            <h2>{{strnombre}}</h2>\n        </ion-list-header>\n        <ion-item>\n            <ion-label floating>Nombre</ion-label>\n            <ion-input type="text" value="" [(ngModel)]="strnombre"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Vendedor</ion-label>\n            <ion-input type="text" value="" [(ngModel)]="strvendedor"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Unidad Negocio</ion-label>\n            <ion-input type="text" value="" [(ngModel)]="strbu"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Bodega distribucción</ion-label>\n            <ion-input type="text" value="" [(ngModel)]="strbodega"></ion-input>\n        </ion-item>\n        <ion-item></ion-item>\n        <ion-list-header>\n            Actualiza tu contraseña\n        </ion-list-header>\n        <ion-item>\n            <ion-label floating>Contraseña</ion-label>\n            <ion-input type="password" value="" [(ngModel)]="strpassword"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Confirme Contraseña</ion-label>\n            <ion-input type="password" value="" [(ngModel)]="strconfirmpassword"></ion-input>\n        </ion-item>\n        <ion-item>\n            <div class="msgerror" *ngIf="strpassword!=strconfirmpassword ">\n                Los password son diferentes!\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <ion-item no-lines>\n            <button ion-fab mini item-end (click)="actualizarstore()">\n                <ion-icon name="checkmark"></ion-icon>\n            </button>\n        </ion-item>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SincronizarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_z_reducer__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SincronizarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SincronizarPage = /** @class */ (function () {
    function SincronizarPage(loading, storage, navCtrl, navParams, store) {
        this.loading = loading;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.opcionessincronziacion = [
            { titulo: 'Clientes', name: 'clientes', icono: 'people', sincronizar: true, terminado: false, enabled: true },
            { titulo: 'Productos', name: 'conceptos', icono: 'cube', sincronizar: true, terminado: false, enabled: true },
            { titulo: 'Listas Pecios', name: 'precios', icono: 'pricetag', sincronizar: true, terminado: false, enabled: true },
            { titulo: 'Parametros', name: 'parametros', icono: 'parametros', sincronizar: true, terminado: false, enabled: true },
            { titulo: 'Ruta programada', name: '', icono: 'map', sincronizar: true, terminado: false, enabled: false },
            { titulo: 'Encuestas', name: '', icono: 'create', sincronizar: true, terminado: false, enabled: false },
            { titulo: 'Cartera', name: '', icono: 'logo-bitcoin', sincronizar: true, terminado: false, enabled: false }
        ];
    }
    SincronizarPage.prototype.ionViewDidLoad = function () {
        this.subscripcionconceptos();
        this.subscripcionclientes();
        this.subscripcionParametros();
        this.subscripcionPrecios();
        this.obtenerdatostorage();
    };
    SincronizarPage.prototype.sincronizaritems = function () {
        var _this = this;
        this.loader = this.loading.create({
            content: 'SINCRONIZANDO  ...',
        });
        this.loader.present().then(function () {
            _this.sincronizar();
        });
    };
    SincronizarPage.prototype.terminarcarga = function () {
        if (this.sincronizacionterminada()) {
            this.loader.dismiss();
        }
    };
    SincronizarPage.prototype.cerrarpagina = function () {
        this.navCtrl.pop();
    };
    //verifica si todos los items han sido sincronziados!
    SincronizarPage.prototype.sincronizacionterminada = function () {
        var sw = true;
        this.opcionessincronziacion.forEach(function (opcion) {
            if (opcion.enabled && !opcion.terminado) {
                sw = false;
            }
        });
        return sw;
    };
    SincronizarPage.prototype.sincronizar = function () {
        var _this = this;
        this.opcionessincronziacion.forEach(function (opcion) {
            if (opcion.sincronizar && opcion.name != '') {
                if (opcion.name == 'clientes') {
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__redux_z_reducer__["c" /* ConsultarActionClientes */](opcion.name, null, '', ''));
                }
                if (opcion.name == 'conceptos') {
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__redux_z_reducer__["b" /* ConsultarAction */](opcion.name, null, '', ''));
                }
                if (opcion.name == 'precios') {
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__redux_z_reducer__["e" /* ConsultarActionprecios */](opcion.name, null, '', ''));
                }
                if (opcion.name == 'parametros') {
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__redux_z_reducer__["d" /* ConsultarActionparametros */](opcion.name, null, '', ''));
                }
            }
        });
    };
    SincronizarPage.prototype.subscripcionconceptos = function () {
        var _this = this;
        this.store.select('estadoconceptos').subscribe(function (estado) {
            try {
                if (!estado.loading) {
                    _this.cargarstorage('SysConceptos', estado.conceptos);
                    _this.opcionessincronziacion[1].terminado = true;
                    _this.terminarcarga();
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    };
    SincronizarPage.prototype.subscripcionclientes = function () {
        var _this = this;
        this.store.select('estadoclientes').subscribe(function (estado) {
            try {
                if (!estado.loading) {
                    _this.cargarstorage('SysClientes', estado.clientes);
                    _this.opcionessincronziacion[0].terminado = true;
                    _this.terminarcarga();
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    };
    SincronizarPage.prototype.subscripcionPrecios = function () {
        var _this = this;
        this.store.select('estadoprecios').subscribe(function (estado) {
            try {
                if (!estado.loading) {
                    _this.cargarstorage('SysPrecios', estado.precios);
                    _this.opcionessincronziacion[2].terminado = true;
                    _this.terminarcarga();
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    };
    SincronizarPage.prototype.subscripcionParametros = function () {
        var _this = this;
        this.store.select('estadoparametros').subscribe(function (estado) {
            try {
                if (!estado.loading) {
                    _this.cargarstorage('SysParametros', estado.parametros);
                    _this.opcionessincronziacion[3].terminado = true;
                    _this.terminarcarga();
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    };
    //manejando storage para guardar datos locales!
    SincronizarPage.prototype.cargarstorage = function (keystorage, data) {
        this.storage.set(keystorage, JSON.parse(JSON.stringify(data)));
        this.conceptos = JSON.parse(JSON.stringify(data));
        console.log('grabando storage' + keystorage, data);
    };
    //obteniendo datos del storage!
    SincronizarPage.prototype.obtenerdatostorage = function () {
        var _this = this;
        try {
            this.storage.get('SysConceptos').then(function (val) {
                _this.conceptos = val;
                console.log('Consultando storage conceptos', val);
            });
            this.storage.get('SysClientes').then(function (val) {
                _this.clientes = val;
                console.log('Consultando storage clientes', val);
            });
            this.storage.get('SysPrecios').then(function (val) {
                _this.precios = val;
                console.log('Consultando storage precios', val);
            });
            this.storage.get('SysParametros').then(function (val) {
                _this.paramatros = val;
                console.log('Consultando storage parametros', val);
            });
        }
        catch (err) {
            return;
        }
    };
    SincronizarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sincronizar',template:/*ion-inline-start:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\sincronizar\sincronizar.html"*/'<!--\n  Generated template for the SincronizarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sincronizar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-list-header>\n      Obtener datos del servidor\n    </ion-list-header>\n\n    <ion-item *ngFor=\'let opcion of opcionessincronziacion\'>\n      <ion-toggle [checked]="opcion.sincronizar"></ion-toggle>\n      <ion-label>\n        {{opcion.titulo}}\n      </ion-label>\n      <ion-icon *ngIf="opcion.terminado" name=\'checkmark\' color="secondary" item-start></ion-icon>\n      <ion-icon  [name]=\'opcion.icono\' item-start></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button   item-end   (click)="sincronizaritems()">\n        SINCRONIZAR\n      </button>\n      <button ion-button   item-end color="danger"  (click)="cerrarpagina()">\n          CERRAR\n      </button>\n    </ion-item>\n\n\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\sincronizar\sincronizar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]])
    ], SincronizarPage);
    return SincronizarPage;
}());

//# sourceMappingURL=sincronizar.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UserListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserListPage = /** @class */ (function () {
    function UserListPage(navCtrl, navParams, store, _storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this._storage = _storage;
    }
    UserListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad UserListPage');
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["a" /* ListAction */]());
        this.userStateSubscription = this.store.select('userState').subscribe(function (userState) {
            _this.users = userState.users;
            // console.log(userState.loading,userState.user,userState.error)
            if (!userState.loading && !userState.error && userState.user) {
                console.log("grabar en el storage:", userState.user);
                _this._storage.set("local_user", userState.user);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
    };
    UserListPage.prototype.userSelected = function (item) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["e" /* SelectAction */](item.Login));
    };
    UserListPage.prototype.ionViewDidLeave = function () {
        this.userStateSubscription.unsubscribe();
    };
    UserListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-list',template:/*ion-inline-start:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\user-list\user-list.html"*/'<!--\n  Generated template for the UserListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Listado de usuarios</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let user of users" (click)="userSelected(user)">\n      {{ user.Nombre }}\n    </button>  \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\user-list\user-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
    ], UserListPage);
    return UserListPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=user-list.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajustes/ajustes.module": [
		718,
		11
	],
	"../pages/buscar/buscar.module": [
		719,
		10
	],
	"../pages/config/config.module": [
		720,
		9
	],
	"../pages/inapp-brower/inapp-brower.module": [
		721,
		8
	],
	"../pages/item/item.module": [
		723,
		7
	],
	"../pages/login/login.module": [
		722,
		6
	],
	"../pages/pedidos/pedidos.module": [
		724,
		5
	],
	"../pages/perfil/perfil.module": [
		725,
		4
	],
	"../pages/recordpedido/recordpedido.module": [
		726,
		3
	],
	"../pages/sincronizar/sincronizar.module": [
		727,
		2
	],
	"../pages/user-list/user-list.module": [
		728,
		1
	],
	"../pages/webview/webview.module": [
		729,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_zeusHttpClient__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_outh2_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http, Headers,RequestOptions } from '@angular/http';








var UserService = /** @class */ (function () {
    function UserService(http, _storage, _outh) {
        this.http = http;
        this._storage = _storage;
        this._outh = _outh;
        // private endPoint: string = 'https://jsonplaceholder.typicode.com/users/1';
        this.endPoint = '/connect/userinfo';
        this.config = { clientId: "", grantType: "", scope: "" };
    }
    UserService.prototype.info = function () {
        return this.http.Get(this.endPoint).map(function (response) {
            console.log(response);
            return response;
        })
            .catch(function (err) {
            debugger;
            throw __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(err);
        });
    };
    UserService.prototype.token = function (email, password) {
        var _this = this;
        return this._outh.GetOauth2Credencial().flatMap(function (OuthCredencial) {
            _this.config = OuthCredencial;
            var body = "username=" + email + "&password=" + password + "&scope=" + _this.config.scope + "&client_id=" + _this.config.clientId + "&grant_type=" + _this.config.grantType;
            var httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["d" /* HttpHeaders */]({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                })
            };
            return _this.http.Post("/connect/token", body, httpOptions)
                .map(function (response) {
                _this._storage.set("token", response);
            }).catch(function (err) {
                throw __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(err.error.error);
            });
        });
    };
    UserService.prototype.list = function () {
        return this.http.Get('/api/usuarios').map(function (response) {
            // console.log(response);
            return response;
        })
            .catch(function (err) {
            debugger;
            throw __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(err);
        });
    };
    UserService.prototype.getByLogin = function (login) {
        return this.http.Get('/api/usuarios/' + login).map(function (response) {
            // console.log(response);
            return response;
        })
            .catch(function (err) {
            debugger;
            throw __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(err);
        });
    };
    UserService.prototype.localLogin = function (username, password) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].fromPromise(this._storage.get("local_user")
            .then(function (user) {
            console.log(user);
            if (user == null) {
                throw new Error('Usuario no entontrado');
            }
            if (user.username == username && user.password == password) {
                return user;
            }
            throw new Error('Usuario no entontrado');
        }));
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_zeusHttpClient__["a" /* ZeusHttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_zeusHttpClient__["a" /* ZeusHttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_outh2_service__["a" /* Outh2Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_outh2_service__["a" /* Outh2Service */]) === "function" && _c || Object])
    ], UserService);
    return UserService;
    var _a, _b, _c;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export applicationHttpClientCreator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZeusHttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function applicationHttpClientCreator(http, storage) {
    return new ZeusHttpClient(http, storage);
}
var ZeusHttpClient = /** @class */ (function () {
    // Extending the HttpClient through the Angular DI.
    function ZeusHttpClient(http, _storage) {
        // If you don't want to use the extended versions in some cases you can access the public property and use the original one.
        // for ex. this.httpClient.http.get(...)
        this.http = http;
        this._storage = _storage;
        this.api = 'https://localhost:5001';
        // private options:RequestOptions;
        //take by https://angular.io/guide/http
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
    }
    /**
     * GET request
     * @param {string} endPoint it doesn't need / in front of the end point
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    ZeusHttpClient.prototype.Get = function (endPoint, options) {
        if (options === void 0) { options = this.httpOptions; }
        //  return this.GetToken().flatMap( token	 => {
        //     options.headers.append("Authorization"," Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlMGVmYTE0Y2FjOWFiZjZjNjUxMDQ4MjczYmRjNzk5IiwidHlwIjoiSldUIn0.eyJuYmYiOjE1NDA5MTY2NjUsImV4cCI6MTU0MDkxNzU2NSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSIsImF1ZCI6WyJodHRwczovL2xvY2FsaG9zdDo1MDAxL3Jlc291cmNlcyIsIldlYkFQSSJdLCJjbGllbnRfaWQiOiJEZXZlbG9wbWVudCIsInN1YiI6Ijk1YjFkNmVkLTZiNzktNGI0OC04YjRhLTYyOWNiZDFmNWYyOCIsImF1dGhfdGltZSI6MTU0MDkxNjY2NSwiaWRwIjoibG9jYWwiLCJyb2xlIjoiYWRtaW5pc3RyYXRvciIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJyb2xlcyIsIldlYkFQSSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.wgTRGSfB2zSWYxOvq7RYrv8O55OkWVnunD-KCozqXfVmPuk6ZkgbKChegXGhBTxrYfHxzMRvoDFizCRJKnsObSiHU3cnVKsvV6N5cp72C7NzH97tw3IuX7X4hw90T6Yg_814DBJhklodhg9NrBAFqjXMHQzl5mPjJkoTMwPn9NH5pNugDSbox8GBu0TY6VS2WX7U3SKoJ918K_J_C9NtI8fWlxupq_5BmrX4VVh987OzuvV6R0PNdSu5PRQoIUYLLAshVJKMhgEk-LUVR-Yc4h0wLuW_MIPzlEgHqa5cc5smPoZr-dd31f-xq_N70fLkuRiTJBT6MJ9cft3z5DRmvw")
        //     console.log("the token is:",token.access_token)
        //     console.log("Headers", options.headers)
        return this.http.get(this.api + endPoint, options);
        // });
    };
    /**
     * POST request
     * @param {string} endPoint end point of the api
     * @param {Object} params body of the request.
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    ZeusHttpClient.prototype.Post = function (endPoint, params, options) {
        return this.http.post(this.api + endPoint, params, options);
    };
    /**
     * PUT request
     * @param {string} endPoint end point of the api
     * @param {Object} params body of the request.
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    ZeusHttpClient.prototype.Put = function (endPoint, params, options) {
        return this.http.put(this.api + endPoint, params, options);
    };
    /**
     * DELETE request
     * @param {string} endPoint end point of the api
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    ZeusHttpClient.prototype.Delete = function (endPoint, options) {
        return this.http.delete(this.api + endPoint, options);
    };
    ZeusHttpClient = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ZeusHttpClient);
    return ZeusHttpClient;
}());

//# sourceMappingURL=zeusHttpClient.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PedidoService = /** @class */ (function () {
    function PedidoService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    PedidoService.prototype.cargar_pedido_store = function () {
        return this.storage.get('LstPedidos');
    };
    PedidoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], PedidoService);
    return PedidoService;
}());

//# sourceMappingURL=pedido.service.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConceptoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConceptoService = /** @class */ (function () {
    function ConceptoService(http) {
        this.http = http;
        this.apiHost = 'http://localhost:51274/Api/sincronizar/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.headers.append('Accept', 'application/json');
        this.headers.append('content-type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    //consultar conceptos!
    ConceptoService.prototype.consultar = function (Entidad, Maxtimestamp, Fecha, Vendedor) {
        var data = { keyempresa: 'xxx', entidad: Entidad, maxtimestamp: Maxtimestamp, fecha: Fecha, vendedor: Vendedor };
        return this.http.post(this.apiHost, data, this.options).map(function (response) {
            return response.json();
        })
            .catch(function (err) {
            throw __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(err);
        });
    };
    ConceptoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ConceptoService);
    return ConceptoService;
}());

//# sourceMappingURL=z.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InappBrowerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InappBrowerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InappBrowerPage = /** @class */ (function () {
    function InappBrowerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InappBrowerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InappBrowerPage');
    };
    InappBrowerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-inapp-brower',template:/*ion-inline-start:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\inapp-brower\inapp-brower.html"*/'<!--\n  Generated template for the InappBrowerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>inappBrower</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\inapp-brower\inapp-brower.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], InappBrowerPage);
    return InappBrowerPage;
}());

//# sourceMappingURL=inapp-brower.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(394);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_ajustes_ajustes__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pedidos_pedidos__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_recordpedido_recordpedido__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_item_item__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_buscar_buscar__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__rdxuser_user_reducer__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__rdxbuscar_ReducerBuscar__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__rdxuser_user_service__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__rdxuser_user_effects__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__rdxpedidos_ReducerPedido__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__rdxpedidos_pedido_service__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__rdxpedidos_pedido_effects__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directives_zformat_zformat__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__directives_zeus_zeus__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_brmasker_ionic_3__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_uppercase_uppercase__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__redux_z_effects__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__redux_z_reducer__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__redux_z_service__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_sincronizar_sincronizar__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_webview_webview__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_config_config__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_qr_scanner__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_in_app_browser__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_vibration__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_inapp_brower_inapp_brower__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_common_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_zeusHttpClient__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_outh2_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__interceptors_token_interterceptor__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_user_list_user_list__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































// plugins









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_user_list_user_list__["a" /* UserListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_ajustes_ajustes__["a" /* AjustesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pedidos_pedidos__["a" /* PedidosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_recordpedido_recordpedido__["a" /* RecordpedidoPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_sincronizar_sincronizar__["a" /* SincronizarPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_item_item__["a" /* ItemPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_buscar_buscar__["a" /* BuscarPage */],
                __WEBPACK_IMPORTED_MODULE_25__directives_zformat_zformat__["a" /* ZformatDirective */],
                __WEBPACK_IMPORTED_MODULE_28__directives_uppercase_uppercase__["a" /* UppercaseDirective */],
                __WEBPACK_IMPORTED_MODULE_33__pages_webview_webview__["a" /* WebviewPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_inapp_brower_inapp_brower__["a" /* InappBrowerPage */],
                __WEBPACK_IMPORTED_MODULE_26__directives_zeus_zeus__["a" /* ZeusDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_27_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ajustes/ajustes.module#AjustesPageModule', name: 'AjustesPage', segment: 'ajustes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buscar/buscar.module#BuscarPageModule', name: 'BuscarPage', segment: 'buscar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/config/config.module#ConfigPageModule', name: 'ConfigPage', segment: 'config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inapp-brower/inapp-brower.module#InappBrowerPageModule', name: 'InappBrowerPage', segment: 'inapp-brower', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item/item.module#ItemPageModule', name: 'ItemPage', segment: 'item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedidos/pedidos.module#PedidosPageModule', name: 'PedidosPage', segment: 'pedidos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recordpedido/recordpedido.module#RecordpedidoPageModule', name: 'RecordpedidoPage', segment: 'recordpedido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sincronizar/sincronizar.module#SincronizarPageModule', name: 'SincronizarPage', segment: 'sincronizar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-list/user-list.module#UserListPageModule', name: 'UserListPage', segment: 'user-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/webview/webview.module#WebviewPageModule', name: 'WebviewPage', segment: 'webview', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__ngrx_store__["d" /* StoreModule */].forRoot({
                    userState: __WEBPACK_IMPORTED_MODULE_18__rdxuser_user_reducer__["g" /* userReducer */],
                    estadobusqueda: __WEBPACK_IMPORTED_MODULE_19__rdxbuscar_ReducerBuscar__["a" /* BuscarReducer */],
                    listapedidos: __WEBPACK_IMPORTED_MODULE_22__rdxpedidos_ReducerPedido__["a" /* PedidoReducer */],
                    estadoconceptos: __WEBPACK_IMPORTED_MODULE_30__redux_z_reducer__["g" /* conceptoReducer */],
                    estadoclientes: __WEBPACK_IMPORTED_MODULE_30__redux_z_reducer__["f" /* clientesreducer */],
                    estadoprecios: __WEBPACK_IMPORTED_MODULE_30__redux_z_reducer__["i" /* preciosreducer */],
                    estadoparametros: __WEBPACK_IMPORTED_MODULE_30__redux_z_reducer__["h" /* parametrosreducer */],
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot({ name: '__mydb', driverOrder: ['websql', 'sqlite', 'indexeddb'] }),
                __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_21__rdxuser_user_effects__["a" /* UserEffects */], __WEBPACK_IMPORTED_MODULE_24__rdxpedidos_pedido_effects__["a" /* PedidosEffects */], __WEBPACK_IMPORTED_MODULE_29__redux_z_effects__["a" /* conceptoEffects */]]),
                __WEBPACK_IMPORTED_MODULE_39__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["c" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_user_list_user_list__["a" /* UserListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_ajustes_ajustes__["a" /* AjustesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pedidos_pedidos__["a" /* PedidosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_recordpedido_recordpedido__["a" /* RecordpedidoPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_sincronizar_sincronizar__["a" /* SincronizarPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_item_item__["a" /* ItemPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_buscar_buscar__["a" /* BuscarPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_webview_webview__["a" /* WebviewPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_inapp_brower_inapp_brower__["a" /* InappBrowerPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_config_config__["a" /* ConfigPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__rdxuser_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_23__rdxpedidos_pedido_service__["a" /* PedidoService */],
                __WEBPACK_IMPORTED_MODULE_31__redux_z_service__["a" /* ConceptoService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_40__services_zeusHttpClient__["a" /* ZeusHttpClient */],
                __WEBPACK_IMPORTED_MODULE_41__services_outh2_service__["a" /* Outh2Service */],
                { provide: __WEBPACK_IMPORTED_MODULE_39__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_42__interceptors_token_interterceptor__["a" /* TokenInterceptor */], multi: true },
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_25__directives_zformat_zformat__["a" /* ZformatDirective */],
                __WEBPACK_IMPORTED_MODULE_26__directives_zeus_zeus__["a" /* ZeusDirective */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_ajustes_ajustes__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rdxuser_user_reducer__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sincronizar_sincronizar__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_user_list_user_list__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, store) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.store = store;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.nameuser = '';
        this.emailuser = '';
        this.imagenuser = "../../assets/imgs/user.png";
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [];
        this.userStateSubscription = this.store.select('userState').subscribe(function (userState) {
            try {
                _this.user = userState.user;
                _this.nameuser = _this.user.given_name;
                _this.emailuser = _this.user.preferred_username;
                console.log('imprimendo datos de usuario:', _this.emailuser, _this.nameuser);
                if (userState.user.role == 'administrator') {
                    _this.pages = [
                        { title: 'Principal', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icono: 'home' },
                        { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__["a" /* PerfilPage */], icono: 'person' },
                        { title: 'Configuración', component: __WEBPACK_IMPORTED_MODULE_5__pages_ajustes_ajustes__["a" /* AjustesPage */], icono: 'build' },
                        { title: 'Cambiar usuario', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icono: 'contact' },
                        { title: 'Sincronizar', component: __WEBPACK_IMPORTED_MODULE_10__pages_sincronizar_sincronizar__["a" /* SincronizarPage */], icono: 'options' },
                        { title: 'Seleccionar', component: __WEBPACK_IMPORTED_MODULE_11__pages_user_list_user_list__["a" /* UserListPage */], icono: 'people' }
                    ];
                }
                else {
                    _this.pages = [
                        { title: 'Principal', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icono: 'home' },
                        { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__["a" /* PerfilPage */], icono: 'person' },
                        { title: 'Configuración', component: __WEBPACK_IMPORTED_MODULE_5__pages_ajustes_ajustes__["a" /* AjustesPage */], icono: 'build' },
                        { title: 'Cambiar usuario', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icono: 'contact' },
                        { title: 'Sincronizar', component: __WEBPACK_IMPORTED_MODULE_10__pages_sincronizar_sincronizar__["a" /* SincronizarPage */], icono: 'options' }
                    ];
                }
            }
            catch (err) { }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        if (page.component == __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]) {
            console.log('disparando nueva accion loginchange');
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__rdxuser_user_reducer__["d" /* LoginChangeAction */]());
        }
        if (page.component == __WEBPACK_IMPORTED_MODULE_11__pages_user_list_user_list__["a" /* UserListPage */]) {
            console.log('disparando nueva ListAction');
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_9__rdxuser_user_reducer__["a" /* ListAction */]());
        }
        if (page.component == __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        }
        else {
            this.nav.push(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\app\app.html"*/'<ion-menu [content]="content" *ngIf="nameuser!=\'\'">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="imagenuser">\n      </ion-avatar>\n      <h2>{{nameuser}}</h2>\n      <p>{{emailuser}}</p>\n    </ion-item>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon  name={{p.icono}}></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\app\app.html"*/,
            styles: ['.transparent-body {  background: none transparent !important;opacity: 0 !important;}']
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["b" /* Store */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rdxuser_user_reducer__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__webview_webview__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_config__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_vibration__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(platform, menu, navParams, navCtrl, store, vibration, _storage, toastCtrl) {
        this.platform = platform;
        this.menu = menu;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.store = store;
        this.vibration = vibration;
        this._storage = _storage;
        this.toastCtrl = toastCtrl;
        this.username = 'ebarrios@zeus.co'; //'ALFREDO'//
        this.password = 'Zeustec18*'; //'4511162152122622'//
        this.press = 0;
        this.swipe = 0;
    }
    LoginPage.prototype.pressEvent = function () {
        this.press++;
        this.vibration.vibrate([1000, 1000]);
        this.lauch();
    };
    LoginPage.prototype.lauch = function () {
        if (this.press >= 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* ConfigPage */]);
        }
    };
    LoginPage.prototype.swipeEvent = function () {
        var _this = this;
        this._storage.get('local_user').then(function (user) {
            if (user != null) {
                _this.swipe++;
                if (_this.swipe % 2 != 0) {
                    _this.showToast('middle', 'Login externo');
                }
                else {
                    _this.showToast('middle', 'Login normal');
                }
            }
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.userStateSubscription = this.store.select('userState').subscribe(function (userState) {
            _this.error = userState.error;
            if (userState.loading == false && userState.error == false && userState.user != null) {
                _this.enter();
            }
            else {
                _this.messageerror = userState.mensaje;
                if (userState.mensaje.length > 0) {
                    alert(userState.mensaje);
                }
            }
        });
    };
    LoginPage.prototype.enter = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.GoToWebview = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__webview_webview__["a" /* WebviewPage */]);
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        this.userStateSubscription.unsubscribe();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this._storage.get('OuthCredencial').then(function (outh) {
            if (outh != null) {
                _this._storage.get('local_user').then(function (user) {
                    if (user != null && _this.swipe % 2 == 0) {
                        console.log("making local login,", _this.username, _this.password, user.username, user.password);
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__rdxuser_user_reducer__["b" /* LocalLoginAction */](_this.username, _this.password));
                    }
                    else {
                        console.log("making external login,", _this.username, _this.password);
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__rdxuser_user_reducer__["c" /* LoginAction */](_this.username, _this.password));
                    }
                });
            }
            else {
                alert("Por favor configure los datos de autenticacion");
            }
        });
    };
    LoginPage.prototype.exitApp = function () {
        this.platform.exitApp();
    };
    LoginPage.prototype.showToast = function (position, mssg) {
        var toast = this.toastCtrl.create({
            message: mssg,
            duration: 2000,
            position: position
        });
        toast.present(toast);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Zeus Mobile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding (press)="pressEvent()" (swipe)="swipeEvent()">\n<!--\n  <ion-item>\n    <ion-label floating>cantidad sin formato</ion-label>\n    <ion-input   class="znumeric" type="text" [(ngModel)]="value" ></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label floating>cantidad formateada</ion-label>\n    <ion-input   class="znumeric" type="text" [(ngModel)]="value" [zformat]="{tipo:\'numerico\',simbolodecimal:\'.\',simbolomiles:\',\',decimales:2,longitud:0}"></ion-input>\n  </ion-item>\n\n\n<ion-item>\n  <ion-input uppercase [(ngModel)]="nombre"></ion-input>\n</ion-item>\n\n<ion-item>\n<p>{{nombre}}</p>\n</ion-item>\n-->\n  <ion-list>\n    <ion-list-header>\n      INICIO DE SESION \n    </ion-list-header>\n    <ion-item>\n      <ion-label floating>Usuario</ion-label>\n      <ion-input type="text" [(ngModel)]="username"  (keyup)="messageerror=null" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Clave</ion-label>\n      <ion-input type="password" required [(ngModel)]="password" (keyup)="messageerror=null" ></ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <!-- <button ion-button full (click)="GoToWebview()" >LeerQR</button> -->\n      <button ion-button full (click)="login()" >Entrar</button>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label floating>Custom Zeus Input</ion-label>\n      <ion-input zeus type="password" required  ></ion-input>\n    </ion-item> \n    <ion-item>\n      <ion-label>Select</ion-label>\n      <ion-select>\n        <ion-option>Bacon</ion-option>\n        <ion-option>Black Olives</ion-option>\n        <ion-option>Extra Cheese</ion-option>\n        <ion-option>Mushrooms</ion-option>\n        <ion-option>Pepperoni</ion-option>\n        <ion-option>Sausage</ion-option>\n      </ion-select>\n    </ion-item>\n     <ion-item>\n      <ion-label>Zselect</ion-label>\n      <ion-select zeus >\n        <ion-option>Bacon</ion-option>\n        <ion-option>Black Olives</ion-option>\n        <ion-option>Extra Cheese</ion-option>\n        <ion-option>Mushrooms</ion-option>\n        <ion-option>Pepperoni</ion-option>\n        <ion-option>Sausage</ion-option>\n      </ion-select>\n    </ion-item> -->\n  \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_vibration__["a" /* Vibration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_vibration__["a" /* Vibration */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]) === "function" && _h || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UserActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LocalLoginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoginChangeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SelectAction; });
/* harmony export (immutable) */ __webpack_exports__["g"] = userReducer;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var UserActionTypes = {
    USER_LOGIN: 'USER_LOGIN',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_ERROR: 'USER_LOGIN_ERROR',
    USER_LOGIN_CHANGE: 'USER_LOGIN_CHANGE',
    USER_USER_INFO: 'USER_USER_INFO',
    USER_LIST: 'USER_LIST',
    USER_LIST_SUCCESS: 'USER_LIST_SUCCESS',
    USER_LIST_ERROR: 'USER_LIST_ERROR',
    USER_SELECT: 'USER_SELECT',
    USER_SELECT_ERROR: 'USER_SELECT_ERROR',
    USER_SELECT_SUCCESS: 'USER_SELECT_SUCCESS',
    USER_LOCAL_LOGIN: 'USER_LOCAL_LOGIN',
    USER_LOCAL_LOGIN_SUCCESS: 'USER_LOCAL_LOGIN_SUCCESS',
    USER_LOCAL_LOGIN_ERROR: 'USER_LOCAL_LOGIN_ERROR',
};
var initialState = {
    loading: false,
    error: false,
    user: null,
    users: null,
    mensaje: '',
};
var LoginAction = /** @class */ (function () {
    function LoginAction(email, password) {
        this.email = email;
        this.password = password;
        this.type = UserActionTypes.USER_LOGIN;
    }
    return LoginAction;
}());

var LocalLoginAction = /** @class */ (function () {
    function LocalLoginAction(email, password) {
        this.email = email;
        this.password = password;
        this.type = UserActionTypes.USER_LOCAL_LOGIN;
    }
    return LocalLoginAction;
}());

var LoginChangeAction = /** @class */ (function () {
    function LoginChangeAction() {
        this.type = UserActionTypes.USER_LOGIN_CHANGE;
    }
    return LoginChangeAction;
}());

var ListAction = /** @class */ (function () {
    function ListAction() {
        this.type = UserActionTypes.USER_LIST;
    }
    return ListAction;
}());

var SelectAction = /** @class */ (function () {
    function SelectAction(username) {
        this.username = username;
        this.type = UserActionTypes.USER_SELECT;
    }
    return SelectAction;
}());

function userReducer(state, action) {
    if (state === void 0) { state = initialState; }
    var errorlogin;
    var ouser;
    switch (action.type) {
        case UserActionTypes.USER_LOGIN:
            return __assign({}, state, { mensaje: '', loading: true });
        case UserActionTypes.USER_LIST:
            return __assign({}, state, { mensaje: '', loading: true });
        case UserActionTypes.USER_LOCAL_LOGIN:
            return __assign({}, state, { mensaje: '', loading: true });
        case UserActionTypes.USER_USER_INFO:
            return __assign({}, state, { mensaje: '', loading: true });
        case UserActionTypes.USER_SELECT:
            return __assign({}, state, { mensaje: '', loading: true });
        case UserActionTypes.USER_LOGIN_SUCCESS:
            ouser = (action.user);
            if (ouser.sub != '') {
                errorlogin = false;
            }
            else {
                errorlogin = true;
            }
            return __assign({}, state, { user: ouser, mensaje: action.mensaje, error: errorlogin, loading: false });
        case UserActionTypes.USER_LIST_SUCCESS:
            return __assign({}, state, { users: action.users, mensaje: action.mensaje, error: false, loading: true });
        case UserActionTypes.USER_LOCAL_LOGIN_SUCCESS:
            return __assign({}, state, { user: action.user, mensaje: action.mensaje, error: false, loading: false });
        case UserActionTypes.USER_SELECT_SUCCESS:
            ouser = (action.user);
            return __assign({}, state, { user: ouser, mensaje: action.mensaje, error: false, loading: false });
        case UserActionTypes.USER_LOGIN_CHANGE:
            return __assign({}, state, { mensaje: '', loading: true });
        case UserActionTypes.USER_LOGIN_ERROR:
            return __assign({}, state, { mensaje: action.mensaje, loading: false, error: true });
        case UserActionTypes.USER_LIST_ERROR:
            return __assign({}, state, { mensaje: action.mensaje, loading: false, error: true });
        case UserActionTypes.USER_SELECT_ERROR:
            return __assign({}, state, { mensaje: action.mensaje, loading: false, error: true });
        case UserActionTypes.USER_LOCAL_LOGIN_ERROR:
            return __assign({}, state, { mensaje: action.mensaje, loading: false, error: true });
        default:
            return state;
    }
}
//# sourceMappingURL=user.reducer.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rdxuser_user_service__ = __webpack_require__(374);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEffects = /** @class */ (function () {
    function UserEffects(actions, userService) {
        var _this = this;
        this.actions = actions;
        this.userService = userService;
        this.login = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["f" /* UserActionTypes */].USER_LOGIN)
            .map(function (action) { return action; })
            .switchMap(function (action) { return _this.userService.token(action.email, action.password)
            .map(function (response) { return ({
            type: __WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["f" /* UserActionTypes */].USER_USER_INFO,
            user: response,
            mensaje: "Ok",
        }); }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["f" /* UserActionTypes */].USER_LOGIN_ERROR,
                mensaje: 'Error:' + err.error,
            });
        }); });
        this.info = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["f" /* UserActionTypes */].USER_USER_INFO)
            .map(function (action) { return action; })
            .switchMap(function (action) { return _this.userService.info()
            .map(function (response) { return ({
            type: __WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["f" /* UserActionTypes */].USER_LOGIN_SUCCESS,
            user: response,
            mensaje: "Ok",
        }); }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["f" /* UserActionTypes */].USER_LOGIN_ERROR,
                mensaje: 'Error:' + err.error,
            });
        }); });
        this.list = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["f" /* UserActionTypes */].USER_LIST)
            .map(function (action) { return action; })
            .switchMap(function (action) { return _this.userService.list()
            .map(function (response) { return ({
            type: __WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["f" /* UserActionTypes */].USER_LIST_SUCCESS,
            users: response,
            mensaje: "Ok",
        }); }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["f" /* UserActionTypes */].USER_LIST_ERROR,
                mensaje: 'Error:' + err.error,
            });
        }); });
        this.getByLogin = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["f" /* UserActionTypes */].USER_SELECT)
            .map(function (action) { return action; })
            .switchMap(function (action) { return _this.userService.getByLogin(action.username)
            .map(function (response) { return ({
            type: __WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["f" /* UserActionTypes */].USER_SELECT_SUCCESS,
            user: response,
            mensaje: "Ok",
        }); }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["f" /* UserActionTypes */].USER_SELECT_ERROR,
                mensaje: 'Error:' + err.error,
            });
        }); });
        this.localLogin = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["f" /* UserActionTypes */].USER_LOCAL_LOGIN)
            .map(function (action) { return action; })
            .switchMap(function (action) { return _this.userService.localLogin(action.email, action.password)
            .map(function (response) { return ({
            type: __WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["f" /* UserActionTypes */].USER_LOCAL_LOGIN_SUCCESS,
            user: response,
            mensaje: "",
        }); }).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_3__rdxuser_user_reducer__["f" /* UserActionTypes */].USER_LOCAL_LOGIN_ERROR,
                mensaje: 'Error:' + err,
            });
        }); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "login", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "info", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "getByLogin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "localLogin", void 0);
    UserEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__rdxuser_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__rdxuser_user_service__["a" /* UserService */]) === "function" && _b || Object])
    ], UserEffects);
    return UserEffects;
    var _a, _b;
}());

//# sourceMappingURL=user.effects.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rdxpedidos_pedido_service__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PedidosEffects = /** @class */ (function () {
    function PedidosEffects(actions, pedidoservicio, store) {
        this.actions = actions;
        this.pedidoservicio = pedidoservicio;
        this.store = store;
    }
    PedidosEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_2__rdxpedidos_pedido_service__["a" /* PedidoService */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]])
    ], PedidosEffects);
    return PedidosEffects;
}());

//# sourceMappingURL=pedido.effects.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZformatDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 Fp++
 Esta directiva se desarrolla con el objetivo de poder validar la entrada de un campo y formatear el campo
 para una presentación mas agradable en el sistema.
 */
var ZformatDirective = /** @class */ (function () {
    function ZformatDirective(element, renderer, model, control) {
        var _this = this;
        this.element = element;
        this.renderer = renderer;
        this.model = model;
        this.control = control;
        this.modelo = this.model;
        this.model.valueChanges.subscribe(function (value) {
            var textochange = _this.onformateartext(value);
            //reportando datos al componente!
            // this.onreportarvaloralcomponente(textochange);
            //manteniendo el modelo sin formatos!
            _this.model.viewToModelUpdate(_this.oneliminarformato(textochange));
            //actualziando la vista en el DOM
            _this.control.valueAccessor.writeValue(textochange);
        });
    }
    ZformatDirective.prototype.ngOnInit = function () {
        var textochange1 = this.onformateartext(this.control.value);
        this.control.valueAccessor.writeValue(textochange1);
    };
    ZformatDirective.prototype.onkeyup = function () {
        //1. obtener dato del control  
        var texto = event.target["value"];
        //var texto: string = this.control.value;
        var textochage = this.onformateartext(texto);
        //this.onreportarvaloralcomponente(textochage);
        //event.target["value"] = textochage;
        this.control.valueAccessor.writeValue(textochage);
        //actualizar el modelo para que se mantenga sin formatos.
    };
    ZformatDirective.prototype.oneliminarformato = function (texto) {
        try {
            var textchange = texto;
            if (this.zformat.tipo == "numerico") {
                //2.1 eliminado los caracteres no permitidos!
                if (this.zformat.decimales > 0) {
                    textchange = textchange.replace(/[^0123456789.-]/g, '');
                }
                else {
                    textchange = textchange.replace(/[^0123456789-]/g, '');
                }
                //2.2 eliminando signo negativo si no esta al inicio del la cadena!
                textchange = textchange.replace(/(\d+)(-)(\d*)/g, '$1$3');
                //2.3 eliminado numeros si superan la lonmgitud establecida..
                if (this.zformat.longitud > 0) {
                    if (this.zformat.longitud < textchange.length) {
                        textchange = textchange.substring(0, this.zformat.longitud);
                    }
                }
                return textchange;
            }
        }
        catch (err) {
            return texto;
        }
    };
    ZformatDirective.prototype.onformateartext = function (texto) {
        try {
            //1. asignar variabole texto para formatearla.
            var textchange = JSON.parse(JSON.stringify(texto));
            //2. validar el tipo de formato y controlar la entrada del dato y apariencía!!!!
            if (this.zformat.tipo == "numerico") {
                //2.1 eliminado los caracteres no permitidos!
                if (this.zformat.decimales > 0) {
                    textchange = textchange.replace(/[^0123456789.-]/g, '');
                }
                else {
                    textchange = textchange.replace(/[^0123456789-]/g, '');
                }
                //2.2 eliminando signo negativo si no esta al inicio del la cadena!
                textchange = textchange.replace(/(\d+)(-)(\d*)/g, '$1$3');
                //2.3 eliminado numeros si superan la lonmgitud establecida..
                if (this.zformat.longitud > 0) {
                    if (this.zformat.longitud < textchange.length) {
                        textchange = textchange.substring(0, this.zformat.longitud);
                    }
                }
                //2.3 formatenado el valor para que aparezca con separador de miles y decimales y truncado según decimales
                var valor = textchange.split(this.zformat.simbolodecimal);
                textchange = valor[0];
                textchange = textchange.replace(/\B(?=(\d{3})+(?!\d))/g, this.zformat.simbolomiles);
                if (valor.length > 1) {
                    textchange = textchange + this.zformat.simbolodecimal + valor[1].substring(0, this.zformat.decimales);
                }
            }
            return textchange;
        }
        catch (err) {
            return texto;
        }
    };
    ZformatDirective.prototype.onreportarvaloralcomponente = function (textchange) {
        this.renderer.setAttribute(this.element.nativeElement, 'value', textchange);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ZformatDirective.prototype, "zformat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('keyup'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ZformatDirective.prototype, "onkeyup", null);
    ZformatDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[zformat]',
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgModel */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgModel */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgControl */]])
    ], ZformatDirective);
    return ZformatDirective;
}());

//# sourceMappingURL=zformat.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZeusDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Input__ = __webpack_require__(710);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ZeusDirective = /** @class */ (function () {
    function ZeusDirective(hostSel, _el) {
        this.hostSel = hostSel;
        this._el = _el;
        this.overslide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        // console.log("el",_el);
        if (_el.nativeElement.nodeName == 'ION-INPUT') {
            var input = new __WEBPACK_IMPORTED_MODULE_3__Input__["a" /* Input */](_el);
        }
        if (_el.nativeElement.nodeName == 'ION-SELECT') {
            var app_1 = hostSel._app;
            hostSel.open = function (ev) {
                // console.log('wrapper in');
                // orig.apply(hostCheckboxComponent, ev);
                if (hostSel.isFocus() || hostSel._disabled) {
                    return;
                }
                console.debug('select, open alert');
                // the user may have assigned some options specifically for the alert
                var selectOptions = Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__["b" /* deepCopy */])(hostSel.selectOptions);
                selectOptions.buttons = null;
                // if the selectOptions didn't provide a title then use the label's text
                if (!selectOptions.title && hostSel._item) {
                    selectOptions.title = hostSel._item.getLabelText();
                }
                if ((hostSel.interface === 'action-sheet' || hostSel.interface === 'popover')) {
                    console.error('customRadio directive is supported only with interface="radio" interface values "action-sheet" and "popover" are not supported when using customRadio directive.');
                    return;
                }
                if (hostSel._multi) {
                    console.error('customRadio directive is not supported multi="true" option.');
                    return;
                }
                var overlay;
                // default to use the alert interface
                hostSel.interface = 'alert';
                // user cannot provide inputs from selectOptions
                // alert inputs must be created by ionic from ion-options
                selectOptions.inputs = hostSel._options.map(function (input) {
                    return {
                        type: (hostSel._multi ? 'checkbox' : 'radio'),
                        label: input.text,
                        value: input.value,
                        checked: input.selected,
                        disabled: input.disabled,
                        handler: function (selectedOption) {
                            // Only emit the select event if it is being checked
                            // For multi selects this won't emit when unchecking
                            if (selectedOption.checked) {
                                input.ionSelect.emit(input.value);
                                overlay.dismiss();
                            }
                        }
                    };
                });
                var selectCssClass = 'select-alert';
                // create the alert instance from our built up selectOptions
                overlay = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Alert */](app_1, selectOptions, hostSel.config);
                // use radio buttons
                selectCssClass += ' single-select-alert';
                selectCssClass += ' custom-radio-alert';
                // If the user passed a cssClass for the select, add it
                selectCssClass += selectOptions.cssClass ? ' ' + selectOptions.cssClass : '';
                overlay.setCssClass(selectCssClass);
                overlay.onDidDismiss(function () {
                    var checkedInput = selectOptions.inputs.find(function (i) { return i.checked; });
                    if (checkedInput) {
                        checkedInput.selected = true;
                        hostSel.value = checkedInput.value;
                    }
                    hostSel._fireBlur();
                    hostSel._overlay = undefined;
                });
                overlay.present(selectOptions);
                hostSel._fireFocus();
                hostSel._overlay = overlay;
                // console.log('wrapper out');
            };
        }
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ZeusDirective.prototype, "overslide", void 0);
    ZeusDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[zeus]',
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Host */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Self */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Select */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], ZeusDirective);
    return ZeusDirective;
}());

//# sourceMappingURL=zeus.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
var Input = /** @class */ (function () {
    function Input(_el) {
        this._el = _el;
        console.log(this._el.nativeElement.style);
        this._el.nativeElement.style.background = "#eef";
    }
    return Input;
}());

//# sourceMappingURL=Input.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UppercaseDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the UppercaseDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var UppercaseDirective = /** @class */ (function () {
    function UppercaseDirective() {
        this.ngModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        console.log('Hello UppercaseDirective Directive');
    }
    UppercaseDirective.prototype.onInputChange = function ($event) {
        this.value = $event.target['value'].toUpperCase();
        this.ngModelChange.emit(this.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], UppercaseDirective.prototype, "ngModelChange", void 0);
    UppercaseDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[uppercase]' // Attribute selector
            ,
            host: {
                "(input)": 'onInputChange($event)'
            }
        }),
        __metadata("design:paramtypes", [])
    ], UppercaseDirective);
    return UppercaseDirective;
}());

//# sourceMappingURL=uppercase.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return conceptoEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_z_service__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__z_reducer__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var conceptoEffects = /** @class */ (function () {
    function conceptoEffects(actions, conceptoService) {
        var _this = this;
        this.actions = actions;
        this.conceptoService = conceptoService;
        //efect consulta de conceptos...
        this.consultarconcepto = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_4__z_reducer__["a" /* ActionTypes */].CONSULTAR)
            .map(function (action) { return action; })
            .switchMap(function (action) { return _this.conceptoService.consultar(action.entidad, action.maxtimestamp, action.fecha, action.vendedor)
            .map(function (response) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__z_reducer__["a" /* ActionTypes */].SUCCESS, concepto: JSON.parse(response.data) }); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_4__z_reducer__["a" /* ActionTypes */].ERROR }); }); });
        //efect consulta de clientes
        this.consultarclientes = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_4__z_reducer__["a" /* ActionTypes */].CLIENTES_CONSULTAR)
            .map(function (action) { return action; })
            .switchMap(function (action) { return _this.conceptoService.consultar(action.entidad, action.maxtimestamp, action.fecha, action.vendedor)
            .map(function (response) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__z_reducer__["a" /* ActionTypes */].CLIENTES_SUCCES, oclientes: JSON.parse(response.data) }); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_4__z_reducer__["a" /* ActionTypes */].CLIENTES_ERROR }); }); });
        //efect consulta de precios
        this.consultarprecios = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_4__z_reducer__["a" /* ActionTypes */].PRECIOS_CONSULTAR)
            .map(function (action) { return action; })
            .switchMap(function (action) { return _this.conceptoService.consultar(action.entidad, action.maxtimestamp, action.fecha, action.vendedor)
            .map(function (response) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__z_reducer__["a" /* ActionTypes */].PRECIOS_SUCCES, oprecios: JSON.parse(response.data) }); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_4__z_reducer__["a" /* ActionTypes */].PRECIOS_ERROR }); }); });
        //efect consulta de precios
        this.consultarparametros = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_4__z_reducer__["a" /* ActionTypes */].PARAMETROS_CONSULTAR)
            .map(function (action) { return action; })
            .switchMap(function (action) { return _this.conceptoService.consultar(action.entidad, action.maxtimestamp, action.fecha, action.vendedor)
            .map(function (response) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__z_reducer__["a" /* ActionTypes */].PARAMATEROS_SUCCES, oparametros: JSON.parse(response.data) }); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_4__z_reducer__["a" /* ActionTypes */].PARAMETROS_ERROR }); }); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], conceptoEffects.prototype, "consultarconcepto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], conceptoEffects.prototype, "consultarclientes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], conceptoEffects.prototype, "consultarprecios", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], conceptoEffects.prototype, "consultarparametros", void 0);
    conceptoEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_3__redux_z_service__["a" /* ConceptoService */]])
    ], conceptoEffects);
    return conceptoEffects;
}());

//# sourceMappingURL=z.effects.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_outh2_service__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        return this.auth.GetToken().mergeMap(function (token) {
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: "Bearer " + token.access_token
                    }
                });
            }
            return next.handle(request);
        });
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_outh2_service__["a" /* Outh2Service */]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());

//# sourceMappingURL=token.interterceptor.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BusquedaActionTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return actionbuscar_buscar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return actionbuscar_terminar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actionbusca_retornarresultado; });
/* harmony export (immutable) */ __webpack_exports__["a"] = BuscarReducer;
var BusquedaActionTypes = {
    BUSCAR: 'BUSCAR',
    TERMINAR_BUSQUEDA: 'TERMINAR_BUSQUEDA',
    RETORNAR_RESULTADO: 'RETORNAR_RESULTADO',
};
var initialState = {
    enproceso: false,
    error: false,
    buscar: null
};
var actionbuscar_buscar = /** @class */ (function () {
    function actionbuscar_buscar(Solicitante, Clasebusqueda) {
        this.Solicitante = Solicitante;
        this.Clasebusqueda = Clasebusqueda;
        this.type = BusquedaActionTypes.BUSCAR;
        this.buscar = { solicitante: Solicitante,
            clasebusqueda: Clasebusqueda,
            datosbusqueda: null };
    }
    return actionbuscar_buscar;
}());

var actionbuscar_terminar = /** @class */ (function () {
    function actionbuscar_terminar() {
        this.type = BusquedaActionTypes.TERMINAR_BUSQUEDA;
    }
    return actionbuscar_terminar;
}());

var actionbusca_retornarresultado = /** @class */ (function () {
    function actionbusca_retornarresultado(Solicitante, Clasebusqueda, rdatosbusqueda) {
        this.Solicitante = Solicitante;
        this.Clasebusqueda = Clasebusqueda;
        this.rdatosbusqueda = rdatosbusqueda;
        this.type = BusquedaActionTypes.RETORNAR_RESULTADO;
        this.buscar = { solicitante: Solicitante,
            clasebusqueda: Clasebusqueda,
            datosbusqueda: rdatosbusqueda };
    }
    return actionbusca_retornarresultado;
}());

function BuscarReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case BusquedaActionTypes.BUSCAR:
            return { enproceso: true, error: false, buscar: action.buscar };
        case BusquedaActionTypes.TERMINAR_BUSQUEDA:
            return { enproceso: false, error: false, buscar: action.buscar };
        case BusquedaActionTypes.RETORNAR_RESULTADO:
            return { enproceso: false, error: false, buscar: action.buscar };
        default:
            return state;
    }
}
//# sourceMappingURL=ReducerBuscar.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rdxbuscar_ReducerBuscar__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//redux - stores + observables


/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuscarPage = /** @class */ (function () {
    function BuscarPage(storage, navCtrl, navParams, store) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
    }
    BuscarPage.prototype.getItems = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        this.lstitemsshow = JSON.parse(JSON.stringify(this.lstitems));
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.lstitemsshow = this.lstitemsshow.filter(function (item) {
                return (item.descripcion.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    BuscarPage.prototype.seleccionaritems = function (selitem) {
        var selitem1 = JSON.parse(JSON.stringify(selitem));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__rdxbuscar_ReducerBuscar__["b" /* actionbusca_retornarresultado */](this.solicitante, this.clasebusqueda, selitem1));
        this.closepagina();
    };
    BuscarPage.prototype.terminarbusqueda = function () {
        this.closepagina();
    };
    BuscarPage.prototype.closepagina = function () {
        this.navCtrl.pop();
    };
    BuscarPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.StateSubscription = this.store.select('estadobusqueda')
            .subscribe(function (estadobuscar1) {
            _this.Estadobusqueda = estadobuscar1;
            if (_this.Estadobusqueda.buscar != null) {
                _this.clasebusqueda = _this.Estadobusqueda.buscar.clasebusqueda;
                _this.solicitante = _this.Estadobusqueda.buscar.solicitante;
                _this.initializeItems(_this.clasebusqueda);
            }
            else {
                _this.clasebusqueda = "";
                _this.solicitante = "";
            }
        });
    };
    BuscarPage.prototype.ionViewDidLeave = function () {
        this.StateSubscription.unsubscribe();
    };
    BuscarPage.prototype.initializeItems = function (clasebusqueda) {
        if (clasebusqueda == "") {
            return;
        }
        if (clasebusqueda == "clientes") {
            this.obtenerlistaclientes();
        }
        if (clasebusqueda == "productos") {
            this.obtenerlistaproductos();
        }
    };
    BuscarPage.prototype.obtenerlistaclientes = function () {
        var _this = this;
        //armando estructura para consulta de clientes!!!
        try {
            this.storage.get('SysClientes').then(function (val) {
                //obteniendo conceptos y armando estructura de items.
                _this.lstitemsshow = [{ iditem: null, descripcion: null, dato: null }];
                //armando estructura de objetos para busqueda!
                val.forEach(function (element) {
                    _this.lstitemsshow.push({ iditem: element.codigo, descripcion: element.nombre, dato: element });
                });
                //eliminado primer registro del array en null;
                _this.lstitemsshow.shift();
                //asignar los items para mostrar...
                _this.lstitems = JSON.parse(JSON.stringify(_this.lstitemsshow));
            });
        }
        catch (err) { }
    };
    BuscarPage.prototype.obtenerlistaproductos = function () {
        var _this = this;
        //armando estructura para la consulta!
        try {
            this.storage.get('SysConceptos').then(function (val) {
                //obteniendo conceptos y armando estructura de items.
                _this.lstitemsshow = [{ iditem: null, descripcion: null, dato: null }];
                //armando estructura de objetos para busqueda!
                val.forEach(function (element) {
                    _this.lstitemsshow.push({ iditem: element.idconcepto, descripcion: element.nombre, dato: element });
                });
                //eliminado primer registro del array en null;
                _this.lstitemsshow.shift();
                //asignar los items para mostrar...
                _this.lstitems = JSON.parse(JSON.stringify(_this.lstitemsshow));
            });
        }
        catch (err) { }
    };
    BuscarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-buscar',template:/*ion-inline-start:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\buscar\buscar.html"*/'<!--\n  Generated template for the BuscarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{clasebusqueda}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-fab top right edge (click)="closepagina()">\n        <button  color="danger"  ion-fab mini><ion-icon name="close"  ></ion-icon></button>\n      </ion-fab>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n      <button ion-item *ngFor="let item of lstitemsshow" (click)="seleccionaritems(item)">\n        {{ item.descripcion }}\n      </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\tfs\ZeusBackOffice\ZOLBackOffice\Mobile\Main\src\pages\buscar\buscar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]])
    ], BuscarPage);
    return BuscarPage;
}());

//# sourceMappingURL=buscar.js.map

/***/ })

},[389]);
//# sourceMappingURL=main.js.map