let listaalbum = ["https://images-na.ssl-images-amazon.com/images/I/61rwDWld0yL._AC_SL1200_.jpg",
"https://images-na.ssl-images-amazon.com/images/I/61PVfWgtwSL._AC_SL1200_.jpg",
"https://images-na.ssl-images-amazon.com/images/I/51FvW2ILXTL._AC_SL1200_.jpg",
"https://images-na.ssl-images-amazon.com/images/I/91prbqSHggL._AC_SL1500_.jpg"]
// Scorpion, Ye, 808s, A Tabua de Esmeralda
let ouviralbum = ["https://open.spotify.com/album/1ATL5GLyefJaxhQzSPVrLX?si=Iidc7ybBS6mHKfxmEUWW5g&dl_branch=1",
"https://open.spotify.com/album/2Ek1q2haOnxVqhvVKqMvJe?si=voFI49-IQziyUYLBxx_xSg&dl_branch=1", 
"https://open.spotify.com/album/3WFTGIO6E3Xh4paEOBY9OU?si=0UtFrZafQn6jmzapEyByVQ&dl_branch=1", 
"https://open.spotify.com/album/5rcMJNWebtl2r2S18Je1A0?si=_eBf2HpqQM-WAgG18gSgdA&dl_branch=1"]
for (i = 0; i < listaalbum.length; i++) {
    document.write(`<a href=
    ${ouviralbum[i]}target="_blank"><img src=
    ${listaalbum[i]}></a>`)
}
/* ------target=_blank" serve para abrir o link em outra pagina (redirecionamento) 
-------- <img src está pegando as imagens do topo do código>
------- href está pegando os links que redirecionam */
