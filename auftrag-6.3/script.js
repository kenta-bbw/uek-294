document.addEventListener("DOMContentLoaded", function setup() {
    // const lehrvertragsnummerField = document.getElementById("lehrvertragsnummer").value.trim();
    // const lehrbetriebsnummerField = document.getElementById("lehrbetriebsnummer").value.trim();
    // const firmaField = document.getElementById("firma").value.trim();
    // const firmaStrasseField = document.getElementById("firma-strasse").value.trim();
    // const firmaPlzField = document.getElementById("firma-plz").value.trim();
    // const firmaOrtField = document.getElementById("firma-ort").value.trim();
    // const firmaTelField = document.getElementById("firma-tel").value.trim();
    // const emailField = document.getElementById("email").value.trim();
    // const lernendeNameField = document.getElementById("lernende-name").value.trim();
    // const lernendeVornameField = document.getElementById("lernendeVorname").value.trim();
    // const lernendeStrasseField = document.getElementById("lernendeStrasse").value.trim();
    // const lernendePlzField = document.getElementById("lernendePlz").value.trim();
    // const lernendeOrtField = document.getElementById("lernendeOrt").value.trim();
    // const lernendeGeburtsdatumField = document.getElementById("lernendeGeburtsdatum").value.trim();
    // const lernendeMutterspracheField = document.getElementById("lernendeMuttersprache").value.trim();
    // const lernendeGeschlechtFieldM = document.getElementById("lernendeGeschlecht_m").value.trim();
    // const lernendeGeschlechtFieldW = document.getElementById("lernendeGeschlecht_w").value.trim();
    // const lernedeTelField = document.getElementById("lernedeTel").value.trim();
    // const lernendeMobileField = document.getElementById("lernendeMobile").value.trim();
    // const lernendeEmailField = document.getElementById("lernendeEmail").value.trim();
    // const lernendeHeimatsortField = document.getElementById("lernendeHeimatsort").value.trim();
    // const lernendeKantonField = document.getElementById("lernendeKanton").value.trim();
    // const lernendeStaatField = document.getElementById("lernendeStaat").value.trim();
    // const lernendeAhv_nrField = document.getElementById("lernendeAhv_nr").value.trim();
    // const gesetzlicheVertretungNameField = document.getElementById("gesetzliche_vertretung_name").value.trim();
    // const gesetzlicheVertretungVornameField = document.getElementById("gesetzliche_vertretung_vorname").value.trim();
    // const gesetzlicheVertretungStrasseField = document.getElementById("gesetzliche_vertretung_strasse").value.trim();
    // const gesetzlicheVertretungPlzField = document.getElementById("gesetzliche_vertretung_plz").value.trim();
    // const gesetzlicheVertretungOrtField = document.getElementById("gesetzliche_vertretung_ort").value.trim();
    // const gesetzlicheVertretungGeschlechtFieldM = document.getElementById("gesetzliche_vertretung_geschlecht_m").value.trim();
    // const gesetzlicheVertretungGeschlechtFieldW = document.getElementById("gesetzliche_vertretung_geschlecht_w").value.trim();
    // const gesetzlicheVertretungTelField = document.getElementById("gesetzliche_vertretung_tel").value.trim();
    // const berufsbezeichnungField = document.getElementById("berufsbezeichnung").value.trim();
    // const fachrichtungProfilField = document.getElementById("fachrichtung_profil").value.trim();
    // const bildungsdauerVonField = document.getElementById("bildungsdauer_von").value.trim();
    // const bildungsdauerBisField = document.getElementById("bildungsdauer_bis").value.trim();
    // const probezeitDauerField = document.getElementById("probezeit_dauer").value.trim();
    // const lehrbetriebNameField = document.getElementById("lehrbetrieb_name").value.trim();
    // const lehrbetriebVornameField = document.getElementById("lehrbetrieb_vorname").value.trim();
    // const berufDesBerufsbildnersField = document.getElementById("beruf_des_berufsbildners").value.trim();
    // const geburtstagDesBerufsbildnersField = document.getElementById("geburtstag_des_berufsbildners").value.trim();
    // const anzahlFachleuteImBetriebField = document.getElementById("anzahl_fachleute_im_betrieb").value.trim();
    // const ausbildungsortField = document.getElementById("ausbildungsort").value.trim();
    // const berufsfachschuleField = document.getElementById("berufsfachschule").value.trim();
    // const unterrichtsspracheField = document.getElementById("unterrichtssprache").value.trim();
    // const berufsmaturitaetsunterrichtField = document.getElementById("berufsmaturitaetsunterricht").value.trim();
    // const reisespesenField = document.getElementById("reisespesen").value.trim();
    // const verpflegungField = document.getElementById("verpflegung").value.trim();
    // const unterkunftField = document.getElementById("unterkunft").value.trim();
    // const schulmaterialField = document.getElementById("schulmaterial").value.trim();
    // const elektronischeGeraeteField = document.getElementById("elektronische_geraete").value.trim();
    // const besondereRegelungField = document.getElementById("besondere_regelung").value.trim();
    // const bruttolohn1BildungsjahrField = document.getElementById("bruttolohn_1_bildungsjahr").value.trim();
    // const bruttolohn2BildungsjahrField = document.getElementById("bruttolohn_2_bildungsjahr").value.trim();
    // const bruttolohn3BildungsjahrField = document.getElementById("bruttolohn_3_bildungsjahr").value.trim();
    // const bruttolohn4BildungsjahrField = document.getElementById("bruttolohn_4_bildungsjahr").value.trim();
    // const monatslohn13Field = document.getElementById("monatslohn_13").value.trim();
    // const stundenProWocheField = document.getElementById("stunden_pro_woche").value.trim();
    // const arbeitstageProWocheField = document.getElementById("arbeitstage_pro_woche").value.trim();
    // const arbeitszeitBesondereRegelungField = document.getElementById("arbeitszeit_besondere_regelung").value.trim();
    // const ferien1BildungsjahrField = document.getElementById("ferien_1_bildungsjahr").value.trim();
    // const ferien2BildungsjahrField = document.getElementById("ferien_2_bildungsjahr").value.trim();
    // const ferien3BildungsjahrField = document.getElementById("ferien_3_bildungsjahr").value.trim();
    // const ferien4BildungsjahrField = document.getElementById("ferien_4_bildungsjahr").value.trim();
    // const brauchtBeschaffungenField = document.getElementById("braucht_beschaffungen").value.trim();
    // const uebernimmtLehrbetriebField = document.getElementById("uebernimmt_lehrbetrieb").value.trim();
    // const uebernimmtLernendeField = document.getElementById("uebernimmt_lernende").value.trim();
    // const nichtberufsunfallversicherungLehrbetriebField = document.getElementById("nichtberufsunfallversicherung_lehrbetrieb").value.trim();
    // const nichtberufsunfallversicherungLernendeField = document.getElementById("nichtberufsunfallversicherung_lernende").value.trim();
    // const krankentaggeldversicherungVereinbartField = document.getElementById("krankentaggeldversicherung_vereinbart").value.trim();
    // const krankentaggeldversicherungLehrbetriebField = document.getElementById("krankentaggeldversicherung_lehrbetrieb").value.trim();
    // const krankentaggeldversicherungLernendeField = document.getElementById("krankentaggeldversicherung_lernende").value.trim();
    // const besondereRegelungTextField = document.getElementById("besondere_regelung_text").value.trim();
    // const lehrbetriebUnterschriftField = document.getElementById("lehrbetrieb_unterschrift").value.trim();
    // const lernendeUnterschriftField = document.getElementById("lernende_unterschrift").value.trim();
    // const gesetzlicheVertretungUnterschriftField = document.getElementById("gesetzliche_vertretung_unterschrift").value.trim();
    // const ortUnterschriftenField = document.getElementById("ort_unterschriften").value.trim();
    // const datumUnterschriftenField = document.getElementById("datum_unterschriften").value.trim();
    // const genehmigungField = document.getElementById("genehmigung").value.trim();
    //  const ortGenehmigungField = document.getElementById("ort_genehmigung").value.trim();
    // const datumGenehmigungField = document.getElementById("datum_genehmigung").value.trim();
    // const stempelGenehmigungField = document.getElementById("stempel_genehmigung").value.trim();
    const validateBtn = document.getElementById('validate');
    const fields = document.getElementsByClassName('field')

    function validateForm() {
        console.log(fields)
        console.log('hello')
 
        return false;
    }
    

    function displayError(message, fieldId) {
        const errorDiv = document.createElement("div");
        errorDiv.className = "error-message";
        errorDiv.textContent = message;
        document.getElementById(fieldId).classList.add("error");
        document.getElementById(fieldId).parentNode.appendChild(errorDiv);
    }

    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach((error) => {
            error.parentNode.removeChild(error);
        });

        const errorFields = document.querySelectorAll(".error");
        errorFields.forEach((field) => {
            field.classList.remove("error");
        });
    }
    validateBtn.addEventListener('click', validateForm);
});
