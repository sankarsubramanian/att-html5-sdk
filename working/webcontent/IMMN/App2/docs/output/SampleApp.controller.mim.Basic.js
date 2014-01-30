Ext.data.JsonP.SampleApp_controller_mim_Basic({"tagname":"class","name":"SampleApp.controller.mim.Basic","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Basic.js","href":"Basic2.html#SampleApp-controller-mim-Basic"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.app.Controller","mixins":[],"requires":["Att.ApiResults","Att.Provider","Ext.MessageBox","SampleApp.Config"],"uses":[],"members":[{"name":"control","tagname":"cfg","owner":"SampleApp.controller.mim.Basic","id":"cfg-control","meta":{"private":true}},{"name":"headerCount","tagname":"cfg","owner":"SampleApp.controller.mim.Basic","id":"cfg-headerCount","meta":{"private":true}},{"name":"indexCursor","tagname":"cfg","owner":"SampleApp.controller.mim.Basic","id":"cfg-indexCursor","meta":{"private":true}},{"name":"provider","tagname":"cfg","owner":"SampleApp.controller.mim.Basic","id":"cfg-provider","meta":{"private":true}},{"name":"refs","tagname":"cfg","owner":"SampleApp.controller.mim.Basic","id":"cfg-refs","meta":{"private":true}},{"name":"authScope","tagname":"property","owner":"SampleApp.controller.mim.Basic","id":"property-authScope","meta":{"private":true}},{"name":"config","tagname":"property","owner":"SampleApp.controller.mim.Basic","id":"property-config","meta":{}},{"name":"applyProvider","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-applyProvider","meta":{}},{"name":"doGetMessageHeaders","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-doGetMessageHeaders","meta":{}},{"name":"getControl","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-getControl","meta":{}},{"name":"getHeaderCount","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-getHeaderCount","meta":{}},{"name":"getIndexCursor","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-getIndexCursor","meta":{}},{"name":"getProvider","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-getProvider","meta":{}},{"name":"getRefs","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-getRefs","meta":{}},{"name":"onCloseResponseView","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-onCloseResponseView","meta":{"private":true}},{"name":"onGetMessageContent","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-onGetMessageContent","meta":{}},{"name":"onGetMessageHeaders","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-onGetMessageHeaders","meta":{}},{"name":"onMessageHeaderTap","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-onMessageHeaderTap","meta":{}},{"name":"setControl","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-setControl","meta":{}},{"name":"setHeaderCount","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-setHeaderCount","meta":{}},{"name":"setIndexCursor","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-setIndexCursor","meta":{}},{"name":"setProvider","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-setProvider","meta":{}},{"name":"setRefs","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-setRefs","meta":{}},{"name":"showResponseView","tagname":"method","owner":"SampleApp.controller.mim.Basic","id":"method-showResponseView","meta":{}}],"code_type":"ext_define","id":"class-SampleApp.controller.mim.Basic","component":false,"superclasses":["Ext.app.Controller"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.app.Controller<div class='subclass '><strong>SampleApp.controller.mim.Basic</strong></div></div><h4>Requires</h4><div class='dependency'>Att.ApiResults</div><div class='dependency'>Att.Provider</div><div class='dependency'>Ext.MessageBox</div><div class='dependency'><a href='#!/api/SampleApp.Config' rel='SampleApp.Config' class='docClass'>SampleApp.Config</a></div><h4>Files</h4><div class='dependency'><a href='source/Basic2.html#SampleApp-controller-mim-Basic' target='_blank'>Basic.js</a></div></pre><div class='doc-contents'><p>Controller that interacts with the Basic MIM application.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-control' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-cfg-control' class='name expandable'>control</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{'att-mim-basic button[action=getmessages]': {'tap': 'onGetMessageHeaders'}, 'att-mim-basic button[action=getMessageContent]': {'tap': 'onGetMessageContent'}, 'att-mim-basic list': {'itemtap': 'onMessageHeaderTap'}, 'actionsheet button[action=close]': {'tap': 'onCloseResponseView'}}</code></p></div></div></div><div id='cfg-headerCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-cfg-headerCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-cfg-headerCount' class='name expandable'>headerCount</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-indexCursor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-cfg-indexCursor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-cfg-indexCursor' class='name expandable'>indexCursor</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-provider' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-cfg-provider' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-cfg-provider' class='name expandable'>provider</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-refs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-cfg-refs' class='name expandable'>refs</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{view: 'att-mim-basic', form: 'att-mim-basic formpanel', messageId: 'att-mim-basic textfield[name=messageId]', partNumber: 'att-mim-basic textfield[name=partNumber]', getContentButton: 'att-mim-basic button[action=getMessageContent]', responseView: {xtype: 'apiresults', selector: 'apiresults', hidden: true, autoCreate: true}}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-authScope' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-property-authScope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-property-authScope' class='name expandable'>authScope</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>authScope: the scope name used by provider to get authorization from user. ...</div><div class='long'><p>authScope: the scope name used by provider to get authorization from user.</p>\n<p>Defaults to: <code>'MIM'</code></p></div></div></div><div id='property-config' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-property-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-property-config' class='name expandable'>config</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Configuration for the MIM sample app controller. ...</div><div class='long'><p>Configuration for the MIM sample app controller. This sets up all the references\nfor the controller as well as define place holders to keep track of the number\nof messages returned and the current index cursor.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-applyProvider' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-method-applyProvider' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-applyProvider' class='name expandable'>applyProvider</a>( <span class='pre'>provider</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>This method is called internally when provider property is set during config initialization. ...</div><div class='long'><p>This method is called internally when provider property is set during config initialization.\nWe'll initialize here our Att.Provider instance to perform the API calls.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>provider</span> : Object<div class='sub-desc'><p>the value we set in config option for this property.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-doGetMessageHeaders' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-method-doGetMessageHeaders' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-doGetMessageHeaders' class='name expandable'>doGetMessageHeaders</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Obtain message headers from the AT&amp;T API and populate our store with the message headers. ...</div><div class='long'><p>Obtain message headers from the AT&amp;T API and populate our store with the message headers.\nIf the indexCursor is 0, we are obtaining the messages from the start, so clear out the\nstore before adding received records, otherwise we will append received records to the existing\nones already in the store.</p>\n</div></div></div><div id='method-getControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-getControl' class='name expandable'>getControl</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of control. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.controller.mim.Basic-cfg-control\" rel=\"SampleApp.controller.mim.Basic-cfg-control\" class=\"docClass\">control</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHeaderCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-cfg-headerCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-getHeaderCount' class='name expandable'>getHeaderCount</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of headerCount. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.controller.mim.Basic-cfg-headerCount\" rel=\"SampleApp.controller.mim.Basic-cfg-headerCount\" class=\"docClass\">headerCount</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getIndexCursor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-cfg-indexCursor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-getIndexCursor' class='name expandable'>getIndexCursor</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of indexCursor. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.controller.mim.Basic-cfg-indexCursor\" rel=\"SampleApp.controller.mim.Basic-cfg-indexCursor\" class=\"docClass\">indexCursor</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getProvider' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-cfg-provider' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-getProvider' class='name expandable'>getProvider</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of provider. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.controller.mim.Basic-cfg-provider\" rel=\"SampleApp.controller.mim.Basic-cfg-provider\" class=\"docClass\">provider</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRefs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-getRefs' class='name expandable'>getRefs</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of refs. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.controller.mim.Basic-cfg-refs\" rel=\"SampleApp.controller.mim.Basic-cfg-refs\" class=\"docClass\">refs</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onCloseResponseView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-method-onCloseResponseView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-onCloseResponseView' class='name expandable'>onCloseResponseView</a>( <span class='pre'>btn</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>btn</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onGetMessageContent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-method-onGetMessageContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-onGetMessageContent' class='name expandable'>onGetMessageContent</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>When user clicks the Get Message Content button, check for appropriate values in form fields\nand then preform a call ...</div><div class='long'><p>When user clicks the Get Message Content button, check for appropriate values in form fields\nand then preform a call to the Att.Provider helper method to form a source URL which will provide\nthe content stream received from the AT&amp;T APIs.</p>\n</div></div></div><div id='method-onGetMessageHeaders' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-method-onGetMessageHeaders' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-onGetMessageHeaders' class='name expandable'>onGetMessageHeaders</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handler for get messages button on MIM application. ...</div><div class='long'><p>Handler for get messages button on MIM application. This will check to see if the\napplication is authorized, and if not, will attempt to obtain authorization.\nIf the app gets successful authorization, it sends a request to retrieve a set of\nmessage headers from the AT&amp;T API and then make a call to 'doGetMessageHeaders'.</p>\n</div></div></div><div id='method-onMessageHeaderTap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-method-onMessageHeaderTap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-onMessageHeaderTap' class='name expandable'>onMessageHeaderTap</a>( <span class='pre'>dv, index, target, record, event, opts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>When a message header is selected (tapped) disable the getMessageContent button, clear the\nmessage part field and fil...</div><div class='long'><p>When a message header is selected (tapped) disable the getMessageContent button, clear the\nmessage part field and fill the message id field with the message id of the selected message.\nIf the selected message has parts (content), enable the getMessageContent button to allow the\nuser to show content after they have entered the specific message part.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dv</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>event</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>opts</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-setControl' class='name expandable'>setControl</a>( <span class='pre'>control</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of control. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.controller.mim.Basic-cfg-control\" rel=\"SampleApp.controller.mim.Basic-cfg-control\" class=\"docClass\">control</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>control</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setHeaderCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-cfg-headerCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-setHeaderCount' class='name expandable'>setHeaderCount</a>( <span class='pre'>headerCount</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of headerCount. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.controller.mim.Basic-cfg-headerCount\" rel=\"SampleApp.controller.mim.Basic-cfg-headerCount\" class=\"docClass\">headerCount</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>headerCount</span> : Number<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setIndexCursor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-cfg-indexCursor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-setIndexCursor' class='name expandable'>setIndexCursor</a>( <span class='pre'>indexCursor</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of indexCursor. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.controller.mim.Basic-cfg-indexCursor\" rel=\"SampleApp.controller.mim.Basic-cfg-indexCursor\" class=\"docClass\">indexCursor</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>indexCursor</span> : Number<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setProvider' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-cfg-provider' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-setProvider' class='name expandable'>setProvider</a>( <span class='pre'>provider</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of provider. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.controller.mim.Basic-cfg-provider\" rel=\"SampleApp.controller.mim.Basic-cfg-provider\" class=\"docClass\">provider</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>provider</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setRefs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-setRefs' class='name expandable'>setRefs</a>( <span class='pre'>refs</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of refs. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.controller.mim.Basic-cfg-refs\" rel=\"SampleApp.controller.mim.Basic-cfg-refs\" class=\"docClass\">refs</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>refs</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-showResponseView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.mim.Basic'>SampleApp.controller.mim.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-mim-Basic-method-showResponseView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.mim.Basic-method-showResponseView' class='name expandable'>showResponseView</a>( <span class='pre'>success, response, url</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Display raw response value received from the AT&amp;T getMessageHeader API call to the user. ...</div><div class='long'><p>Display raw response value received from the AT&amp;T getMessageHeader API call to the user.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>success</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>response</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>url</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});