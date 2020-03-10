function generateTab() {
detail = {
    name: 'alfa-rome',
    innerName: 'ALFA ROMEO',
    innerContent: 'ALFA ROMEO'
};

li = document.createElement("li");
li.setAttribute("class","nav-item")

tab = document.createElement("a");
tab.setAttribute("class","nav-link");
tab.setAttribute("id","v-pills-"+detail.name+"-tab");
tab.setAttribute("data-toggle","pill");
tab.setAttribute("href","#v-pills-"+detail.name);
tab.setAttribute("role","tab");
tab.setAttribute("aria-controls","v-pills-"+detail.name);
tab.setAttribute("aria-selected","false");
tab.innerHTML = '<i class="fas fa-chevron-right" style="color: grey;"></i>&nbsp;' + detail.innerName;
li.appendChild(tab);

div = document.createElement("div");
div.setAttribute("class","tab-pane fade");
div.setAttribute("id","v-pills-"+detail.name);
div.setAttribute("role","tabpanel");
div.setAttribute("aria-labelledby","v-pills-"+detail.name+"-tab");
div.innerHTML = detail.innerContent

document.getElementById("v-pills-tab").appendChild(li);
document.getElementById("v-pills-tabContent").appendChild(div);
}