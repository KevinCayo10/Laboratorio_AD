"use strict";(self.webpackChunkappGSV=self.webpackChunkappGSV||[]).push([[161],{8161:(M,c,i)=>{i.r(c),i.d(c,{ClientesModule:()=>L});var m=i(6895),u=i(1667),g=i(9849),f=i(5226),d=i.n(f),o=i(4650),p=i(3793),C=i(9828),v=i(8010),h=i(7284),b=i(4841),Z=i(6846),E=i(9536),_=i(7653),a=i(433);let T=(()=>{class t{constructor(){this.titulo="",this.formularioEnviado=new o.vpe,this.formularioCerrado=new o.vpe}ngOnInit(){this.cargarFormulario()}cargarFormulario(){this.formulario=new a.cw({id:new a.NI(this.data?._id),nombresCompletos:new a.NI(this.data?.nombresCompletos,a.kI.required),direccion:new a.NI(this.data?.direccion,a.kI.required),correoElectronico:new a.NI(this.data?.correoElectronico,a.kI.required),celular:new a.NI(this.data?.celular)})}grabar(){if(this.formulario.valid){const e=this.formulario.value;console.log(e),this.formularioEnviado.emit(e)}}cerrarFormulario(){this.formularioCerrado.emit()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["gsv-form"]],inputs:{data:"data"},outputs:{formularioEnviado:"formularioEnviado",formularioCerrado:"formularioCerrado"},decls:45,vars:2,consts:[[1,"container","col-md-10"],[1,"card","custom-card"],[1,"card-body"],[1,"form-container",3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],[1,"mb-3"],["for","nombresCompletos",1,"form-label"],[1,"input-group"],["type","text","id","nombresCompletos","formControlName","nombresCompletos",1,"form-control"],[1,"input-group-text"],[1,"fas","fa-user"],["for","correoElectronico",1,"form-label"],["type","email","id","correoElectronico","formControlName","correoElectronico",1,"form-control"],[1,"fas","fa-envelope"],["for","direccion",1,"form-label"],["type","text","id","direccion","formControlName","direccion",1,"form-control"],[1,"fas","fa-map-marker-alt"],["for","celular",1,"form-label"],["type","text","id","celular","formControlName","celular",1,"form-control"],[1,"fas","fa-phone"],[1,"d-flex","justify-content-end"],["type","submit",1,"btn","btn-primary","me-2",3,"disabled"],[1,"fas","fa-save"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"fas","fa-times"]],template:function(e,r){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3),o.NdJ("ngSubmit",function(){return r.grabar()}),o.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"label",7),o._uU(8,"Nombres Completos"),o.qZA(),o.TgZ(9,"div",8),o._UZ(10,"input",9),o.TgZ(11,"span",10),o._UZ(12,"i",11),o.qZA()()()(),o.TgZ(13,"div",5)(14,"div",6)(15,"label",12),o._uU(16,"Correo Electr\xf3nico"),o.qZA(),o.TgZ(17,"div",8),o._UZ(18,"input",13),o.TgZ(19,"span",10),o._UZ(20,"i",14),o.qZA()()()()(),o.TgZ(21,"div",4)(22,"div",5)(23,"div",6)(24,"label",15),o._uU(25,"Direcci\xf3n"),o.qZA(),o.TgZ(26,"div",8),o._UZ(27,"input",16),o.TgZ(28,"span",10),o._UZ(29,"i",17),o.qZA()()()(),o.TgZ(30,"div",5)(31,"div",6)(32,"label",18),o._uU(33,"Celular"),o.qZA(),o.TgZ(34,"div",8),o._UZ(35,"input",19),o.TgZ(36,"span",10),o._UZ(37,"i",20),o.qZA()()()()(),o.TgZ(38,"div",21)(39,"button",22),o._UZ(40,"i",23),o._uU(41," Grabar "),o.qZA(),o.TgZ(42,"button",24),o.NdJ("click",function(){return r.cerrarFormulario()}),o._UZ(43,"i",25),o._uU(44," Cancelar "),o.qZA()()()()()()),2&e&&(o.xp6(3),o.Q6J("formGroup",r.formulario),o.xp6(36),o.Q6J("disabled",r.formulario.invalid))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],styles:[".container[_ngcontent-%COMP%]{padding:10px 0}"]}),t})();function A(t,l){if(1&t){const e=o.EpF();o.TgZ(0,"gsv-search",5),o.NdJ("buscadorEnviado",function(n){o.CHM(e);const s=o.oxw();return o.KtG(s.buscarData(n))}),o.qZA()}}function P(t,l){if(1&t){const e=o.EpF();o.TgZ(0,"gsv-form",6),o.NdJ("formularioEnviado",function(n){o.CHM(e);const s=o.oxw();return o.KtG(s.grabarFormulario(n))})("formularioCerrado",function(){o.CHM(e);const n=o.oxw();return o.KtG(n.cerrarFormulario())}),o.qZA()}if(2&t){const e=o.oxw();o.Q6J("data",e.fila)}}const y=[{path:"",component:(()=>{class t{constructor(e){this.clienteService=e,this.registros=[{_id:1,nombresCompletos:"Juan P\xe9rez",correoElectronico:"juan.perez@mail.com",direccion:"Av. Quito",celular:"0991234567"},{_id:2,nombresCompletos:"Mar\xeda G\xf3mez",correoElectronico:"maria.gomez@mail.com",direccion:"Av. Guayaquil",celular:"0987654321"},{_id:3,nombresCompletos:"Pedro L\xf3pez",correoElectronico:"pedro.lopez@mail.com",direccion:"Av. Cuenca",celular:"0999876543"}],this.title="CLIENTES",this.metaDataColumns=[{field:"_id",title:"ID"},{field:"nombresCompletos",title:"NOMBRES"},{field:"correoElectronico",title:"CORREO ELECTR\xd3NICO"},{field:"direccion",title:"DIRECCION"},{field:"celular",title:"CELULAR"}],this.keypadButtons=[{icon:"fa-solid fa-cloud-arrow-down",color:"btn-success",accion:"download"},{icon:"fa-solid fa-plus",color:"btn-primary",accion:"NUEVO"}],this.data=[],this.totalRegistros=this.data.length,this.cargarClientes("")}cargarClientes(e){this.clienteService.cargarClientes().subscribe(r=>{this.registros=r,e&&(console.log(e),this.registros=this.registros.filter(n=>n.nombresCompletos.toLowerCase().includes(e.toLowerCase())),console.log(this.registros)),this.totalRegistros=this.registros.length,this.changePage(0)})}changePage(e){const r=g.N.PAGE_SIZE,n=r*e;this.data=this.registros.slice(n,n+r)}enviarAccion(e){switch(e){case"DOWNLOAD":break;case"NUEVO":this.formulario=!0,this.abrirFormulario()}}accionEditar(e){this.formulario=!0,this.abrirFormulario(e)}accionEliminar(e){console.log("Entro a pagelis"),this.clienteService.eliminarCliente(e).subscribe(()=>{this.cargarClientes("")})}buscarData(e){console.log(e),this.cargarClientes(e.terminoBusqueda)}grabarFormulario(e){if(e)if(e.id){const r={...e};console.log("Entro al ID"),console.log(r),this.clienteService.actualizarCliente(e.id,r).subscribe(()=>{this.cargarClientes(""),this.formulario=!1,this.mostrarMensajeActualizacion()})}else{const r={...e};this.clienteService.registrarCliente(r).subscribe(()=>{console.log("Dentro regsitrar"),console.log(r),this.cargarClientes(""),this.formulario=!1,this.mostrarMensajeA\u00f1adir()})}else this.formulario=!1}abrirFormulario(e=null){this.fila=e}cerrarFormulario(){this.formulario=!1}mostrarMensajeActualizacion(){d().fire({title:"Registro actulaizado",icon:"info",timer:3e3,showConfirmButton:!1})}mostrarMensajeA\u00f1adir(){d().fire({title:"Registro a\xf1adido",icon:"info",timer:3e3,showConfirmButton:!1})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(p.$))},t.\u0275cmp=o.Xpm({type:t,selectors:[["gsv-page-list"]],decls:9,vars:7,consts:[[3,"buscadorEnviado",4,"ngIf"],[3,"data","formularioEnviado","formularioCerrado",4,"ngIf"],[3,"data","metaDataColumns","title","onClick","onClickEliminar"],[3,"length","onChangePage"],[3,"keypadButtons","onClick"],[3,"buscadorEnviado"],[3,"data","formularioEnviado","formularioCerrado"]],template:function(e,r){1&e&&(o.TgZ(0,"div"),o._UZ(1,"gsv-title"),o.YNc(2,A,1,0,"gsv-search",0),o.qZA(),o.YNc(3,P,1,1,"gsv-form",1),o.TgZ(4,"gsv-container")(5,"perfect-scrollbar")(6,"gsv-table",2),o.NdJ("onClick",function(s){return r.accionEditar(s)})("onClickEliminar",function(s){return r.accionEliminar(s)}),o.qZA()(),o.TgZ(7,"gsv-paginator",3),o.NdJ("onChangePage",function(s){return r.changePage(s)}),o.qZA()(),o.TgZ(8,"gsv-keypad-button",4),o.NdJ("onClick",function(s){return r.enviarAccion(s)}),o.qZA()),2&e&&(o.xp6(2),o.Q6J("ngIf",!r.formulario),o.xp6(1),o.Q6J("ngIf",r.formulario),o.xp6(3),o.Q6J("data",r.data)("metaDataColumns",r.metaDataColumns)("title",r.title),o.xp6(1),o.Q6J("length",r.totalRegistros),o.xp6(1),o.Q6J("keypadButtons",r.keypadButtons))},dependencies:[m.O5,C.r,v.a,h.e,b.Vv,Z.J,E.o,_.g,T],styles:[".table-container[_ngcontent-%COMP%]{width:80%;margin:0 auto;max-height:300px;overflow:auto}table[_ngcontent-%COMP%]{width:100%}[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px;height:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#888;border-radius:5px}[_ngcontent-%COMP%]::-ms-scrollbar{width:5px;height:8px}[_ngcontent-%COMP%]::-ms-thumb{background-color:#888;border-radius:5px}"]}),t})()}];let N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.Bz.forChild(y),u.Bz]}),t})();var F=i(8366);let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[m.ez,N,F.m]}),t})()}}]);