debug = false;

function selectRows( ) {
	var allRows = document.getElementsByTagName('tr');
	for (i = 0; i < allRows.length; i++) {
		if (filter(allRows[i].className)) {
			allRows[i].style.display    = 'table-row';
			allRows[i].style.visibility = 'visible';
		} else {
			if (debug) {
				cn = allRows[i].childNodes;
				alert(cn[2].innerText + ' hidden');
			}
			allRows[i].style.display    = 'none';
			allRows[i].style.visibility = 'collapse';
		}
	}
	return true;
}

function filter(classString) {
	if (classString == '') {
		return true;
	}
	var result = false;
	var checkboxes = new Array('clsActiveDirectory','clsApplication','clsAppServer','clsBackup','clsCleanup','clsCodeGen','clsConfigSoftware','clsConfigWindows','clsDateTime','clsDemoScript','clsDOS','clsFileConversion','clsFun','clsHelp','clsInstall','clsInternational','clsInternet','clsInventory','clsLogin','clsMath','clsMultimedia','clsNetwork','clsOS2','clsPicture','clsPrinting','clsProcess','clsRegistry','clsSecurity','clsServer','clsTermServer','clsTextProcessing','clsTool','clsUnitConversion','clsUserGroup','clsUserInput','clsWrapper','clsWWW','clsXML');
	for (j = 0; j < checkboxes.length; j++) {
		cs = ' ' + classString + ' ';
		cb = ' ' + checkboxes[j] + ' ';
		if ( (cs.indexOf(cb) > -1) && document.getElementById(checkboxes[j]).checked) {
			result = true;
		}
	}
	return result;
}

function selectAll(sel) {
	var checkboxes = new Array('clsActiveDirectory','clsApplication','clsAppServer','clsBackup','clsCleanup','clsCodeGen','clsConfigSoftware','clsConfigWindows','clsDateTime','clsDemoScript','clsDOS','clsFileConversion','clsFun','clsHelp','clsInstall','clsInternational','clsInternet','clsInventory','clsLogin','clsMath','clsMultimedia','clsNetwork','clsOS2','clsPicture','clsPrinting','clsProcess','clsRegistry','clsSecurity','clsServer','clsTermServer','clsTextProcessing','clsTool','clsUnitConversion','clsUserGroup','clsUserInput','clsWrapper','clsWWW','clsXML');
	for (i = 0; i < checkboxes.length; i++) {
		document.getElementById(checkboxes[i]).checked = sel;
	}
	selectRows( );
	return true;
}

function hideFilters( ) {
	var tblFilters = document.getElementById('Filters');
	tblFilters.style.display = 'none';
	tblFilters.style.visibility = 'collapse';
	var btnFilters = document.getElementById('btnFilters');
	btnFilters.style.display = 'block';
	btnFilters.style.visibility = 'visible';
}

function showFilters( ) {
	var tblFilters = document.getElementById('Filters');
	tblFilters.style.display = 'table';
	tblFilters.style.visibility = 'visible';
	var btnFilters = document.getElementById('btnFilters');
	btnFilters.style.display = 'none';
	btnFilters.style.visibility = 'hidden';
}
