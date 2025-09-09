
document.addEventListener('DOMContentLoaded', function() {
    
    
    function updateDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = now.toLocaleDateString('ko-KR', options);
        const dayStr = now.toLocaleDateString('ko-KR', { weekday: 'long' });
        
        document.getElementById('current-date').textContent = dateStr;
        document.getElementById('current-day').textContent = dayStr;
    }

    
    function updateTime() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('ko-KR', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        const period = now.getHours() >= 12 ? '오후' : '오전';
        
        document.getElementById('current-time').textContent = timeStr;
        document.getElementById('time-period').textContent = period;
    }

    
    function updateWeather() {
        
        const weatherData = [
            { temp: 22, desc: '맑음' },
            { temp: 18, desc: '구름많음' },
            { temp: 15, desc: '흐림' },
            { temp: 25, desc: '맑음' }
        ];
        
        const randomWeather = weatherData[Math.floor(Math.random() * weatherData.length)];
        
        document.getElementById('weather-temp').textContent = `${randomWeather.temp}°C`;
        document.getElementById('weather-desc').textContent = randomWeather.desc;
    }

    
    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            alert('회원가입 페이지로 이동합니다!');
        });
    }

    
    const signupLink = document.getElementById('signup');
    const loginLink = document.getElementById('login');
    
    if (signupLink) {
        signupLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('회원가입 페이지로 이동합니다.');
        });
    }
    
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('로그인 페이지로 이동합니다.');
        });
    }

    
    document.querySelectorAll('.notice-list li').forEach(item => {
        item.addEventListener('click', function() {
            const noticeText = this.textContent.replace(/\d{4}\.\d{2}\.\d{2}/, '').trim();
            alert(`공지사항: ${noticeText}`);
        });
    });

    
    document.querySelectorAll('.facility-list li').forEach(item => {
        item.addEventListener('click', function() {
            alert(`${this.textContent} 시설 안내 페이지로 이동합니다.`);
        });
    });

    
    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert(`${this.textContent} 페이지로 이동합니다.`);
        });
    });

    
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .api-card');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    
    document.querySelectorAll('.feature-card, .api-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    
    document.querySelectorAll('.api-card').forEach(card => {
        card.addEventListener('click', function() {
            const cardType = this.querySelector('h3').textContent;
            alert(`${cardType} 상세 정보를 확인합니다.`);
        });
    });

    
    updateDate();
    updateTime();
    updateWeather();
    
    
    setInterval(updateTime, 1000);
    
    
    setInterval(updateWeather, 300000);
    
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    console.log('UNIVERSE Sports Center Website Loaded Successfully! 🏃‍♂️');
});