/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

const classes = {
  "xtjkt1": "X TJKT 1",
  "xtjkt2": "X TJKT 2",
  "xtjkt3": "X TJKT 3",
  "xpplg1": "X PPLG 1",
  "xpplg2": "X PPLG 2",
  "xdkv1": "X DKV 1",
  "xdkv2": "X DKV 2",
  "xanimasi": "X ANIMASI",
  "xitjkt1": "XI TJKT 1",
  "xitjkt2": "XI TJKT 2",
  "xitjkt3": "XI TJKT 3",
  "xipplg1": "XI PPLG 1",
  "xipplg2": "XI PPLG 2",
  "xidkv1": "XI DKV 1",
  "xidkv2": "XI DKV 2",
  "xianimasi": "XI ANIMASI",
  "xiitjkt1": "XII TJKT 1",
  "xiitjkt2": "XII TJKT 2",
  "xiitjkt3": "XII TJKT 3",
  "xiipplg1": "XII PPLG 1",
  "xiipplg2": "XII PPLG 2",
  "xiidkv1": "XII DKV 1",
  "xiidkv2": "XII DKV 2",
  "xiianimasi": "XII ANIMASI"
};

async function getSiswa(nisn) {
                let response = await fetch("https://testing.basis64computer.workers.dev", { 
                  method: 'POST',
                  headers: {"type": "GETSISWA"},
                  body: JSON.stringify({session_id: getCookie("session_id"), nisn: nisn})
                });
                let json = await response.json();
                return JSON.parse(await decryptAES(getCookie("key"), json.ciphertext));
            }


const navInnerHTML = `<!-- Navbar Brand-->
            <a class="navbar-brand ps-3" href="index.html">Tatib - SMKN7</a>
            <!-- Sidebar Toggle-->
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            <!-- Navbar Search-->
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <a class="navbar-brand text-light" id="userName"></a>
            </form>
            <!-- Navbar-->
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="logout.html">Logout</a></li>
                    </ul>
                </li>
            </ul>`;

const sideNavInnerHTML = `<nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Halaman</div>
                            <a class="nav-link" href="dashboard.html">
                                <div class="sb-nav-link-icon"><i class="bi bi-person-badge"></i></div>
                                Dashboard
                            </a>
                            <a class="nav-link" href="scoreboard.html">
                                <div class="sb-nav-link-icon"><i class="bi bi-list-task"></i></div>
                                Scoreboard
                            </a>
                            <a class="nav-link" href="logout.html">
                                <div class="sb-nav-link-icon"><i class="bi bi-box-arrow-left"></i></div>
                                Logout
                            </a>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Login Sebagai:</div>
                        <div id="userName2"></div>
                    </div>
                </nav>`;

const footerInnerHTML = `<div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-secondary fw-bold">Hak Cipta &copy; 2025 <a class="text-primary text-decoration-none" href="https://basis64-tools.pages.dev">TJKT Programmer Team</a></div>
                            <div class="text-muted">SMK Negeri 7 Samarinda</div>
                        </div>
                    </div>`;

let account;
async function start() {
    let nav = document.getElementById('nav').innerHTML = navInnerHTML;
    //console.log(nav);
    document.getElementById('layoutSidenav_nav').innerHTML = sideNavInnerHTML;
    document.getElementById('footer').innerHTML = footerInnerHTML;

    /*let response = await fetch("https://testing.basis64computer.workers.dev", { 
                  method: 'POST',
                  headers: {"type": "GETDATA"},
                  body: JSON.stringify({session_id: getCookie("session_id")})
                });
                let json = await response.json();
                console.log(json);
                if (json.ok) {
                    let data = JSON.parse(await decryptAES(getCookie("key"), json.ciphertext));
                    account = data;
                }*/

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    if (initialize) {
        await initialize(account);
    }

    const name = document.getElementById('userName');
                    const name2 = document.getElementById('userName2');
                    const name3 = document.getElementById('userName3');
                    console.log(account);
                    name.innerHTML = account.name;
                    name2.innerHTML = account.name;
                    name3.innerHTML = account.name;

};

window.addEventListener('DOMContentLoaded', event => {
    start();
});
