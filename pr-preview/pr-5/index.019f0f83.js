let e,t,n,o;var a=globalThis,l={},r={},d=a.parcelRequire813d;null==d&&((d=function(e){if(e in l)return l[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return l[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},a.parcelRequire813d=d),d.register;var s=d("mjrTk");let i=0,u=(0,s.loadState)();function c(e,t,n){let o,a;return t===n?(o="fa-check",a="green"):t<n?(o="fa-arrow-up",a="red"):(o="fa-arrow-down",a="blue"),`
            <div class="hint">
                <span>${e}</span>
                <i class="hint-icon fas ${o}" style="color: ${a};"></i>
            </div>
        `}function y(){document.getElementById("stats").innerHTML=`
            Streak: ${u.streak}<br>
            Win %: ${Math.round(u.totalSolved/u.totalPlayed*100)||0}%<br>
            Total Played: ${u.totalPlayed}
        `,(0,s.saveState)(u)}function m(){let e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1)-e,n=Math.floor(t/36e5),o=Math.floor(t%36e5/6e4),a=Math.floor(t%6e4/1e3);document.getElementById("countdown").textContent=`Next Parabole in: ${n}h ${o}m ${a}s`}window.onload=function(){"function"==typeof window.Math.seedrandom?(function(){let o=new Date,a=1e4*o.getFullYear()+(o.getMonth()+1)*100+o.getDate(),l=new window.Math.seedrandom(a);e=Math.floor(21*l())-10,t=Math.floor(41*l())-20,n=Math.floor(101*l())-50,0===e&&(e=1)}(),function(){let a=document.getElementById("quadraticChart").getContext("2d"),l=Array.from({length:201},(e,t)=>(t-100)/10),r=l.map(o=>e*o*o+t*o+n);o&&o.destroy(),o=new Chart(a,{type:"line",data:{labels:l,datasets:[{label:"Quadratic Function",data:r,borderColor:"rgb(75, 192, 192)",tension:.1}]},options:{responsive:!0,scales:{x:{type:"linear",position:"center",title:{display:!0,text:"x"}},y:{type:"linear",position:"center",title:{display:!0,text:"y"}}},plugins:{title:{display:!0,text:"Parabole: y = ax² + bx + c"}}}})}(),y(),m(),setInterval(m,1e3)):(console.error("seedrandom library not loaded properly"),document.getElementById("hints").innerHTML="Error: Game could not be initialized. Please try refreshing the page.")},document.querySelector("#guess").addEventListener("click",function(){if(u.todaySolved){alert("You've already solved today's Parabole. Refresh the page for a new puzzle!");return}i++;let o=parseInt(document.getElementById("guessA").value),a=parseInt(document.getElementById("guessB").value),l=parseInt(document.getElementById("guessC").value),r="";r+=c("a",o,e)+c("b",a,t)+c("c",l,n),document.getElementById("hints").innerHTML=r,document.getElementById("attempts").textContent=`Attempts: ${i}`,o===e&&a===t&&l===n&&(u.todaySolved=!0,u.streak++,u.totalPlayed++,u.totalSolved++,y(),alert(`Congratulations! You've solved today's Parabole: ${e}x\xb2 + ${t}x + ${n}
You solved it in ${i} attempts.`))}),null!=u&&u.todaySolved&&(document.getElementById("guessContainer").style.display="none",document.getElementById("attempts").style.display="none",document.getElementById("alreadySolved").style.display="flex");
//# sourceMappingURL=index.019f0f83.js.map
