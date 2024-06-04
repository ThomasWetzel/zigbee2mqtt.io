"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[91922],{156533:(e,o,t)=>{t.r(o),t.d(o,{data:()=>i});const i=JSON.parse('{"key":"v-75598248","path":"/devices/ZBMicro.html","title":"SONOFF ZBMicro control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SONOFF ZBMicro control via MQTT","description":"Integrate your SONOFF ZBMicro via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-04-29T19:24:38.000Z"},"excerpt":"","headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Rf turbo mode (binary)","slug":"rf-turbo-mode-binary","link":"#rf-turbo-mode-binary","children":[]},{"level":3,"title":"Inching control set (composite)","slug":"inching-control-set-composite","link":"#inching-control-set-composite","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1717524515000},"filePathRelative":"devices/ZBMicro.md"}')},304151:(e,o,t)=>{t.r(o),t.d(o,{default:()=>f});var i=t(166252);const d=(0,i._)("h1",{id:"sonoff-zbmicro",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#sonoff-zbmicro","aria-hidden":"true"},"#"),(0,i.Uk)(" SONOFF ZBMicro")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZBMicro")],-1),c=(0,i._)("td",null,"Vendor",-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Zigbee USB repeater plug")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"switch (state), power_on_behavior, rf_turbo_mode, inching_control_set, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZBMicro.png",alt:"SONOFF ZBMicro"})])],-1),u=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),h=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),p=(0,i.uE)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off" aria-hidden="true">#</a> On with timed off</h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionnaly an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depend on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum" aria-hidden="true">#</a> Power-on behavior (enum)</h3><p>Controls the behavior when the device is powered on after power loss. If you get an <code>UNSUPPORTED_ATTRIBUTE</code> error, the device does not support it.. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="rf-turbo-mode-binary" tabindex="-1"><a class="header-anchor" href="#rf-turbo-mode-binary" aria-hidden="true">#</a> Rf turbo mode (binary)</h3><p>Enable/disable Radio power turbo mode. Value can be found in the published state on the <code>rf_turbo_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;rf_turbo_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rf_turbo_mode&quot;: NEW_VALUE}</code>. If value equals <code>true</code> rf turbo mode is ON, if <code>false</code> OFF.</p><h3 id="inching-control-set-composite" tabindex="-1"><a class="header-anchor" href="#inching-control-set-composite" aria-hidden="true">#</a> Inching control set (composite)</h3><p>Device Inching function Settings. The device will automatically turn off (turn on) after each turn on (turn off) for a specified period of time.. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;inching_control_set&quot;: {&quot;inching_control&quot;: VALUE, &quot;inching_time&quot;: VALUE, &quot;inching_mode&quot;: VALUE}}</code></p><ul><li><code>inching_control</code> (binary): Enable/disable inching function. allowed values: <code>ENABLE</code> or <code>DISABLE</code></li><li><code>inching_time</code> (numeric): Delay time for executing a inching action. min value is 0.5, max value is 3599.5, unit is seconds</li><li><code>inching_mode</code> (binary): Set inching off or inching on mode. allowed values: <code>ON</code> or <code>OFF</code></li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),m={},f=(0,t(983744).Z)(m,[["render",function(e,o){const t=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),d,(0,i._)("table",null,[a,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[c,(0,i._)("td",null,[(0,i.Wm)(t,{to:"/supported-devices/#v=SONOFF"},{default:(0,i.w5)((()=>[(0,i.Uk)("SONOFF")])),_:1})])]),r,l,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),u,(0,i._)("p",null,[(0,i.Uk)("This device supports OTA updates, for more information see "),(0,i.Wm)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("OTA updates")])),_:1}),(0,i.Uk)(".")]),h,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);