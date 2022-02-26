const windowsLink = document.getElementById('windows-app').getAttribute('href');
const androidLink = document.getElementById('android-app').getAttribute('href');
const macLink = document.getElementById('mac-app').getAttribute('href');

function handleOS() {
    const os = platform.os.family;
    const mainDownloadImage = document.querySelector('#main-download-inner img');
    const mainDownloadStrong = document.querySelector('#main-download-inner strong');
    const mainDownloadLink = document.querySelector('#main-download-inner a');

    if (os.toLowerCase() == 'windows') {
        mainDownloadImage.src = './assets/images/windows.svg';
        mainDownloadStrong.innerHTML = 'اپلیکیشن ویندوز';
        mainDownloadLink.setAttribute('href', windowsLink);
        mainDownloadLink.innerHTML = 'دانلود فایل .EXE';
    }
    if (os.toLowerCase() == 'android') {
        mainDownloadImage.src = './assets/images/android.svg';
        mainDownloadStrong.innerHTML = 'اپلیکیشن اندروید';
        mainDownloadLink.setAttribute('href', androidLink);
        mainDownloadLink.innerHTML = 'دانلود فایل .APK';
    }
    if (os.toLowerCase() == 'os x') {
        mainDownloadImage.src = './assets/images/mac.svg';
        mainDownloadStrong.innerHTML = 'اپلیکیشن مک';
        mainDownloadLink.setAttribute('href', macLink);
        mainDownloadLink.innerHTML = 'دانلود فایل .DMG';
    }
}

function init() {
    handleOS();
    const logo = document.getElementById('logo');
    const logoPos = [logo.getBoundingClientRect().x, logo.getBoundingClientRect().y];
    const logoClone = logo.cloneNode(true);
    const container = document.querySelector('.container');
    logoClone.style.position = 'absolute';
    logoClone.style.left = (document.documentElement.clientWidth - logoClone.width) / 2 + 'px';
    logoClone.style.top = (document.documentElement.clientHeight - logoClone.height) / 2 + 'px';
    logoClone.id = 'logo-clone';

    document.body.appendChild(logoClone);

    const logoClonePos = [logoClone.getBoundingClientRect().x, logoClone.getBoundingClientRect().y];
    gsap.to('#logo-clone', {
        opacity: 0,
        duration: .4,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: 3,
        onComplete: function() {

            gsap.to(logoClone, {
                x: logoPos[0] - logoClonePos[0],
                y: logoPos[1] - logoClonePos[1],
                delay: .25,
                duration: .5,
                onComplete: function() {
                    logo.style.opacity = 0;
                    gsap.to(container, {
                        opacity: 1,
                        delay: .5,
                        duration: .5,
                    });
                    gsap.set('#title-img img', {
                        x: '101%'
                    });
                    gsap.to('#title-img img', {
                        x: 0,
                        delay: .5,
                        duration: .5
                    });
                    gsap.set('#website-link-outer a', {
                        x: '101%'
                    });
                    gsap.to('#website-link-outer a', {
                        x: 0,
                        delay: .5,
                        duration: .5
                    })
                }
            });
        }
    });

}

init();