(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={form:"Checkout_form__1zHbj",control:"Checkout_control__31tlp",actions:"Checkout_actions__27hV9",submit:"Checkout_submit__2tYsy",invalid:"Checkout_invalid__baAOn"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3ynKn",total:"Cart_total__3iNYa",actions:"Cart_actions__DeYw_","button--alt":"Cart_button--alt__Z5ZhI",button:"Cart_button__3G4Yd"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3VcT0",summary:"CartItem_summary__1kslS",price:"CartItem_price__3yLb3",amount:"CartItem_amount__3zxGc",actions:"CartItem_actions__2xF3r"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2VUX9",icon:"HeaderCartButton_icon__2edpw",badge:"HeaderCartButton_badge__MJU9t",bump:"HeaderCartButton_bump__3lczT"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__ffIn0",modal:"Modal_modal__3qkI_","slide-down":"Modal_slide-down__3eGYH"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2L9_F","meals-appear":"AvailableMeals_meals-appear__3Di4A",MealsLoading:"AvailableMeals_MealsLoading__3EDWO",MealsError:"AvailableMeals_MealsError__2RT5B"}},function(e,t,n){e.exports={meal:"MealItem_meal__376XK",description:"MealItem_description__2AosK",price:"MealItem_price__TzRDf"}},,function(e,t,n){e.exports={header:"Header_header__3rhmR","main-image":"Header_main-image__2jwZv"}},,function(e,t,n){e.exports={card:"Card_card__22NNY"}},function(e,t,n){e.exports={form:"MealItemForm_form__4VSIA"}},function(e,t,n){e.exports={input:"Input_input__2ypvu"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__37iiK"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(9),a=n.n(c),r=(n(28),n(2)),i=n(1),s=n.n(i),o=n(7),l=n.n(o),u=n(13),d=n(5),j=n(14),m=n.n(j),b=n(0),O=function(e){return Object(b.jsx)("div",{className:m.a.backdrop,onClick:e.onClick})},h=function(e){return Object(b.jsx)("div",{className:m.a.modal,children:Object(b.jsxs)("div",{className:m.a.content,children:[" ",e.children]})})},x=function(e){var t=document.getElementById("overlays");return Object(b.jsxs)(i.Fragment,{children:[a.a.createPortal(Object(b.jsx)(O,{onClick:e.onClick}),t),a.a.createPortal(Object(b.jsxs)(h,{children:[" ",e.children]}),t)]})},p=n(6),f=n.n(p),_=s.a.createContext({items:[],totalAmount:0,addItem:function(){},removeItem:function(){},clearCartHandler:function(){}}),v=n(8),C=n.n(v),y=function(e){var t="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:C.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsxs)("div",{className:C.a.summary,children:[Object(b.jsx)("span",{className:C.a.price,children:t}),Object(b.jsxs)("span",{className:C.a.amount,children:["x ",e.amount]})]})]}),Object(b.jsxs)("div",{className:C.a.actions,children:[Object(b.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(b.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},N=n(3),g=n(4),A=n.n(g),k=function(e){var t=Object(N.useState)({name:!0,street:!0,postal:!0,city:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(N.useRef)(),s=Object(N.useRef)(),o=Object(N.useRef)(),l=Object(N.useRef)(),u=function(e){return 0===e.trim().length},d="".concat(A.a.control," ").concat(c.name?"":A.a.invalid),j="".concat(A.a.control," ").concat(c.street?"":A.a.invalid),m="".concat(A.a.control," ").concat(c.postal?"":A.a.invalid),O="".concat(A.a.control," ").concat(c.city?"":A.a.invalid);return Object(b.jsxs)("form",{className:A.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=s.current.value,r=o.current.value,d=l.current.value,j=!u(n),m=!u(c),b=!u(d),O=6===r.trim().length;a({name:j,street:m,postal:O,city:b}),j&&m&&b&&O&&e.onConfirm({name:n,street:c,postal:r,city:d})},children:[Object(b.jsxs)("div",{className:d,children:[Object(b.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(b.jsx)("input",{type:"text",id:"name",ref:i}),!c.name&&Object(b.jsx)("p",{children:" please Enter valid Name!!"})]}),Object(b.jsxs)("div",{className:j,children:[Object(b.jsx)("label",{htmlFor:"street",children:"Street"}),Object(b.jsx)("input",{type:"text",id:"street",ref:s}),!c.street&&Object(b.jsx)("p",{children:" please Enter valid Street!!"})]}),Object(b.jsxs)("div",{className:m,children:[Object(b.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(b.jsx)("input",{type:"text",id:"postal",ref:o}),!c.postal&&Object(b.jsx)("p",{children:" please Enter valid Postal Code!!"})]}),Object(b.jsxs)("div",{className:O,children:[Object(b.jsx)("label",{htmlFor:"city",children:"City"}),Object(b.jsx)("input",{type:"text",id:"city",ref:l}),!c.city&&Object(b.jsx)("p",{children:" please Enter valid city!!"})]}),Object(b.jsxs)("div",{className:A.a.actions,children:[Object(b.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(b.jsx)("button",{className:A.a.submit,children:"Confirm"})]})]})},I=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],o=Object(i.useState)(!1),j=Object(r.a)(o,2),m=j[0],O=j[1],h=Object(i.useState)(!1),p=Object(r.a)(h,2),v=p[0],C=p[1],N=Object(i.useContext)(_),g=function(e){N.removeItem(e)},A=function(e){N.addItem(Object(d.a)(Object(d.a)({},e),{},{amount:1}))},I=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fetch("https://react-http-a44c2-default-rtdb.firebaseio.com/oderes.json",{method:"post",body:JSON.stringify({user:t,orderedItems:N.items,totalPrice:N.totalAmount.toFixed(2)})});case 3:O(!1),C(!0),N.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M="\u20b9 ".concat(N.totalAmount.toFixed(2)),w=N.items.length>0,H=Object(b.jsx)("ul",{className:f.a["cart-items"],children:N.items.map((function(e){return Object(b.jsx)(y,{name:e.name,amount:e.amount,price:e.price,onRemove:g.bind(null,e),onAdd:A.bind(null,e)},e.id)}))}),S=Object(b.jsxs)("div",{className:f.a.actions,children:[Object(b.jsx)("button",{className:f.a["button--alt"],onClick:e.hideCartHandler,children:"Close"}),w&&Object(b.jsx)("button",{className:f.a.button,onClick:function(){a(!0)},children:"Order"})]}),E=Object(b.jsxs)(s.a.Fragment,{children:[H,Object(b.jsxs)("div",{className:f.a.total,children:[Object(b.jsx)("span",{children:" Total Amount"}),Object(b.jsxs)("span",{children:[" ",M]})]}),c&&Object(b.jsx)(k,{onCancel:e.hideCartHandler,onConfirm:I}),!c&&S]}),F=Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)("p",{children:"Successfully sent the order!"}),Object(b.jsx)("div",{className:f.a.actions,children:Object(b.jsx)("button",{className:f.a.button,onClick:e.hideCartHandler,children:"Close"})})]}),R=Object(b.jsx)("p",{children:"Sending order data..."});return Object(b.jsxs)(x,{onClick:e.hideCartHandler,children:[!m&&!v&&E,m&&R,!m&&v&&F]})},M=n.p+"static/media/meals.2971f633.jpeg",w=n(18),H=n.n(w),S=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(b.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},E=n(11),F=n.n(E),R=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useContext)(_),o=s.items.reduce((function(e,t){return e+t.amount}),0),l="".concat(F.a.button," ").concat(c?F.a.bump:""),u=s.items;return Object(i.useEffect)((function(){if(0!==u.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[u]),Object(b.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(b.jsx)("span",{className:F.a.icon,children:Object(b.jsx)(S,{})}),Object(b.jsx)("span",{children:"Your Cart"}),Object(b.jsxs)("span",{className:F.a.badge,children:[" ",o," "]})]})},D=function(e){return Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsxs)("header",{className:H.a.header,children:[Object(b.jsx)("h1",{children:" React Meals"}),Object(b.jsx)(R,{onClick:e.showCartHandler})]}),Object(b.jsx)("div",{className:H.a["main-image"],children:Object(b.jsx)("img",{src:M,alt:"A table full of delicious food!"})})]})},T=n(15),Y=n.n(T),B=n(20),V=n.n(B),z=function(e){return Object(b.jsx)("div",{className:V.a.card,children:e.children})},L=n(21),P=n.n(L),J=n(22),K=n.n(J),G=s.a.forwardRef((function(e,t){return Object(b.jsxs)("div",{className:K.a.input,children:[Object(b.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(b.jsx)("input",Object(d.a)({ref:t},e.input))]})})),Z=function(e){var t=Object(N.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(N.useRef)();return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=i.current.value,c=+n;(0===n.trim().length||c<1||c>5)&&a(!1),e.onAddToCart(c)},className:P.a.form,children:[Object(b.jsx)(G,{ref:i,label:"Amount",input:{id:"Amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(b.jsx)("button",{children:"+ Add "}),!c&&Object(b.jsx)("p",{children:"Please Enter Valid Amount"})]})},q=n(16),U=n.n(q),X=function(e){var t=Object(i.useContext)(_),n="\u20b9 ".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:U.a.meal,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("div",{className:U.a.description,children:e.description}),Object(b.jsx)("div",{className:U.a.price,children:n})]}),Object(b.jsx)("div",{children:Object(b.jsx)(Z,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},W=function(){var e=Object(N.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(N.useState)(!1),i=Object(r.a)(a,2),s=i[0],o=i[1],d=Object(N.useState)(),j=Object(r.a)(d,2),m=j[0],O=j[1];if(Object(N.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,fetch("https://react-http-a44c2-default-rtdb.firebaseio.com/meals.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("something went wrong");case 6:return e.next=8,t.json();case 8:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),o(!1);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("effect"),function(){return e.apply(this,arguments)}().catch((function(e){o(!1),console.log(e),O(e.message)}))}),[]),s)return Object(b.jsx)("section",{className:Y.a.MealsLoading,children:Object(b.jsx)("p",{children:"Loading......"})});if(m)return Object(b.jsx)("section",{className:Y.a.MealsError,children:Object(b.jsxs)("p",{children:[" ",m]})});var h=n.map((function(e){return Object(b.jsx)(X,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(b.jsx)("section",{className:Y.a.meals,children:Object(b.jsx)(z,{children:Object(b.jsx)("ul",{children:h})})})},$=n(23),Q=n.n($),ee=function(){return Object(b.jsxs)("section",{className:Q.a.summary,children:[Object(b.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(b.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(b.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},te=function(){return Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)(ee,{}),Object(b.jsx)(W,{})]})},ne=n(19),ce=function(e,t){var n;if("ADD"===t.type){var c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id}));if(-1!==a){var r=e.items[a],i=Object(d.a)(Object(d.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ne.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var s=e.items.findIndex((function(e){return e.id===t.item.id})),o=e.items[s];if(1===o.amount)n=e.items.filter((function(e){return e.id!==t.item.id}));else{var l=Object(d.a)(Object(d.a)({},o),{},{amount:o.amount-1});(n=Object(ne.a)(e.items))[s]=l}return{items:n,totalAmount:e.totalAmount-t.item.price}}return ae},ae={items:[],totalAmount:0},re=function(e){var t=Object(i.useReducer)(ce,ae),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){!function(e){a({type:"ADD",item:e})}(e)},removeItem:function(e){!function(e){a({type:"REMOVE",item:e})}(e)},clearCart:function(e){a({type:"CLEAR"})}};return Object(b.jsx)(_.Provider,{value:s,children:e.children})};var ie=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)(re,{children:[n&&Object(b.jsx)(I,{hideCartHandler:function(){c(!1)}}),Object(b.jsx)(D,{showCartHandler:function(){c(!0)}}),Object(b.jsx)("main",{children:Object(b.jsx)(te,{})})]})};a.a.render(Object(b.jsx)(ie,{}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.33c69c67.chunk.js.map