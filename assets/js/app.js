function updateToggle(value) {

    // Toogle = Work
    if (value.checked == true) {
        document.body.style.backgroundColor = '#efeae6';
        document.body.style.color = '#333';
        document.getElementById("btnWork").style.display = 'inline-block';
        document.getElementById("btnPrivat").style.display = 'none';
        document.getElementById("socialIconsWork").style.display = 'block';
        document.getElementById("socialIconsPrivat").style.display = 'none';
        document.getElementById("profilPicWork").style.display = 'block';
        document.getElementById("profilPicPrivat").style.display = 'none';

    // Toggle = Privat
    } else {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        document.getElementById("btnWork").style.display = 'none';
        document.getElementById("btnPrivat").style.display = '';
        document.getElementById("socialIconsWork").style.display = 'none';
        document.getElementById("socialIconsPrivat").style.display = '';
        document.getElementById("profilPicWork").style.display = 'none';
        document.getElementById("profilPicPrivat").style.display = '';
    }
}