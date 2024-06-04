"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[79944],{774976:(e,t,r)=>{r.r(t),r.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-e67b1c00","path":"/devices/TS0601_3_phase_clamp_meter_relay.html","title":"TuYa TS0601_3_phase_clamp_meter_relay control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0601_3_phase_clamp_meter_relay control via MQTT","description":"Integrate your TuYa TS0601_3_phase_clamp_meter_relay via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-04-27T17:39:26.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Produced energy (numeric)","slug":"produced-energy-numeric","link":"#produced-energy-numeric","children":[]},{"level":3,"title":"Voltage a (numeric)","slug":"voltage-a-numeric","link":"#voltage-a-numeric","children":[]},{"level":3,"title":"Voltage b (numeric)","slug":"voltage-b-numeric","link":"#voltage-b-numeric","children":[]},{"level":3,"title":"Voltage c (numeric)","slug":"voltage-c-numeric","link":"#voltage-c-numeric","children":[]},{"level":3,"title":"Power a (numeric)","slug":"power-a-numeric","link":"#power-a-numeric","children":[]},{"level":3,"title":"Power b (numeric)","slug":"power-b-numeric","link":"#power-b-numeric","children":[]},{"level":3,"title":"Power c (numeric)","slug":"power-c-numeric","link":"#power-c-numeric","children":[]},{"level":3,"title":"Current a (numeric)","slug":"current-a-numeric","link":"#current-a-numeric","children":[]},{"level":3,"title":"Current b (numeric)","slug":"current-b-numeric","link":"#current-b-numeric","children":[]},{"level":3,"title":"Current c (numeric)","slug":"current-c-numeric","link":"#current-c-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1717524515000},"filePathRelative":"devices/TS0601_3_phase_clamp_meter_relay.md"}')},709121:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var o=r(166252);const i=(0,o._)("h1",{id:"tuya-ts0601-3-phase-clamp-meter-relay",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#tuya-ts0601-3-phase-clamp-meter-relay","aria-hidden":"true"},"#"),(0,o.Uk)(" TuYa TS0601_3_phase_clamp_meter_relay")],-1),a=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"TS0601_3_phase_clamp_meter_relay")],-1),c=(0,o._)("td",null,"Vendor",-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"3-phase clamp power meter with relay")],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"switch (state), power, energy, produced_energy, voltage_a, voltage_b, voltage_c, power_a, power_b, power_c, current_a, current_b, current_c, linkquality")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_3_phase_clamp_meter_relay.png",alt:"TuYa TS0601_3_phase_clamp_meter_relay"})])],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"White-label"),(0,o._)("td",null,"Wenzhou Taiye Electric TAC7361C BI")],-1),h=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),p=(0,o.uE)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="produced-energy-numeric" tabindex="-1"><a class="header-anchor" href="#produced-energy-numeric" aria-hidden="true">#</a> Produced energy (numeric)</h3><p>Sum of produced energy. Value can be found in the published state on the <code>produced_energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="voltage-a-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-a-numeric" aria-hidden="true">#</a> Voltage a (numeric)</h3><p>Measured electrical potential value (phase A). Value can be found in the published state on the <code>voltage_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-b-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-b-numeric" aria-hidden="true">#</a> Voltage b (numeric)</h3><p>Measured electrical potential value (phase B). Value can be found in the published state on the <code>voltage_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-c-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-c-numeric" aria-hidden="true">#</a> Voltage c (numeric)</h3><p>Measured electrical potential value (phase C). Value can be found in the published state on the <code>voltage_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-a-numeric" tabindex="-1"><a class="header-anchor" href="#power-a-numeric" aria-hidden="true">#</a> Power a (numeric)</h3><p>Instantaneous measured power (phase A). Value can be found in the published state on the <code>power_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-b-numeric" tabindex="-1"><a class="header-anchor" href="#power-b-numeric" aria-hidden="true">#</a> Power b (numeric)</h3><p>Instantaneous measured power (phase B). Value can be found in the published state on the <code>power_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-c-numeric" tabindex="-1"><a class="header-anchor" href="#power-c-numeric" aria-hidden="true">#</a> Power c (numeric)</h3><p>Instantaneous measured power (phase C). Value can be found in the published state on the <code>power_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-a-numeric" tabindex="-1"><a class="header-anchor" href="#current-a-numeric" aria-hidden="true">#</a> Current a (numeric)</h3><p>Instantaneous measured electrical current (phase A). Value can be found in the published state on the <code>current_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-b-numeric" tabindex="-1"><a class="header-anchor" href="#current-b-numeric" aria-hidden="true">#</a> Current b (numeric)</h3><p>Instantaneous measured electrical current (phase B). Value can be found in the published state on the <code>current_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-c-numeric" tabindex="-1"><a class="header-anchor" href="#current-c-numeric" aria-hidden="true">#</a> Current c (numeric)</h3><p>Instantaneous measured electrical current (phase C). Value can be found in the published state on the <code>current_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',30),m={},b=(0,r(983744).Z)(m,[["render",function(e,t){const r=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),i,(0,o._)("table",null,[a,(0,o._)("tbody",null,[n,(0,o._)("tr",null,[c,(0,o._)("td",null,[(0,o.Wm)(r,{to:"/supported-devices/#v=TuYa"},{default:(0,o.w5)((()=>[(0,o.Uk)("TuYa")])),_:1})])]),d,l,u,s])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,o.kq)(" Notes END: Do not edit below this line "),h,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(r,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);