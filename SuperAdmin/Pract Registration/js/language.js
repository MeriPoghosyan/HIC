function DropDownChanged(oDDL) {
    var oTextbox = oDDL.form.elements["lang_txt"];
    if (oTextbox) {
        oTextbox.style.display = (oDDL.value == "") ? "" : "none";
        if (oDDL.value == "")
            oTextbox.focus();
    }
}

function FormSubmit(oForm) {
    var oHidden = oForm.elements["language"];
    var oDDL = oForm.elements["lang_ddl"];
    var oTextbox = oForm.elements["lang_txt"];
    if (oHidden && oDDL && oTextbox)
        oHidden.value = (oDDL.value == "") ? oTextbox.value : oDDL.value;
}