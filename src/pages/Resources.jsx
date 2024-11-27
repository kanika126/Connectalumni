// ResourcesPage.js
import React from 'react';

const Resources= () => {
  return (
    <div className="flex flex-col items-center mt-10 font-sans">
      <div className="text-2xl font-bold text-indigo-500 mb-4 underline">Learning platforms</div>
      <div className="flex items-center space-x-4 mb-8">
        <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer">
          <img src="https://play-lh.googleusercontent.com/qq5__wITsoCx2kUK8TqVW2-8UDRuxET9kCzPzAPHad8umXiHRF2N0tZKuLezd0tiBQg" alt="Logo 1" className="cursor-pointer h-20 w-36" />
        </a>
        <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://s.udemycdn.com/meta/default-meta-image-v2.png" alt="Logo 2" className="cursor-pointer h-40 w-40" />
        </a>
        <a href="https://www.udacity.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://getlogo.net/wp-content/uploads/2023/03/udacity-logo-vector-2023.png" alt="Logo 3" className="cursor-pointer h-40 w-40" />
        </a>
      </div>

      <div className="text-2xl font-bold text-indigo-500 mb-4 underline">Coding Practice and Challenges</div>
      <div className="flex items-center space-x-4 mb-8">
      <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*gBkMCGTAdSk4tu17SCa7RQ.png" alt="Logo 1" className="cursor-pointer h-40 w-40" />
        </a>
        <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://pathrise-website-guide-wp.s3.us-west-1.amazonaws.com/guides/wp-content/uploads/2019/05/22174532/hackerrank-logo.jpg" alt="Logo 2" className="cursor-pointer w-40 h-40" />
        </a>
        <a href="https://www.codingninjas.com/?pageGroup=1" target="_blank" rel="noopener noreferrer"/>
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*ewtU3saCHetgATr9P1GPHg.jpeg" alt="Logo 3" className="cursor-pointer w-40 h-40" />
        {/* Repeat the same structure for Heading 2 */}
      </div>

      <div className="text-2xl font-bold text-indigo-500 mb-4 underline">Online Courses and Tutorials</div>
      <div className="flex items-center space-x-4 mb-8">
      <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
          <img src="https://www.henleyherald.com/wp-content/uploads/2019/08/66734754_10156176643630988_883564894085971968_o.jpg" alt="Logo 1" className="cursor-pointer h-40 w-40" />
        </a>
        <a href="https://www.thecodehelp.in/" target="_blank" rel="noopener noreferrer">
          <img src="data:image/png;base64,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" alt="Logo 2" className="cursor-pointer w-40 h-40" />
        </a>
        <a href="https://www.codewithharry.com/" target="_blank" rel="noopener noreferrer"/>
          <img src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/css-images/image_example.png" alt="Logo 3" className="cursor-pointer h-40 w-40" />
        {/* Repeat the same structure for Heading 3 */}
      </div>

      <div className="text-2xl font-bold text-indigo-500 mb-4 underline">Networking and professional Development</div>
      <div className="flex items-center space-x-4 mb-8">
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY8AAAB+CAMAAADr/W3dAAAAe1BMVEX///8oZ7INXa4dYrAjZbEaYa/X4e+MqtNDdrmzx+JOgL57nczA0OZfisJymMrz9vrM2OqbtNeEpM8AWq0sa7SqwN7j6vXn7/dvlMf09/sAWKzR3e1GervW4O8AVatYhsGju9u3yeI3cLaUsNaIp9GftthbicJokMYAUaogMeX4AAALg0lEQVR4nO2dCXeyOhCGJQtuuFQ2EVoptvX+/194AQtkJoFqiSj98p577jmfNJDkIctMJmEyMTIyMjIyMjIyMjIyMjIyMjIyMjIyMvqDCk7HmX4lq3Tz6JKNUi+UsHuIEu/90WUboaaEWXcSI/6jSzc6Oe69aJRE7EeXb2xa3K11FOL7R5dvZAru2jwsloWPLuG49E7uy8N0WLdpfl8eFjU8bpLh8VwyPJ5LhsdzyfB4Lil4ME4Ip5rMEm08gvl0N3X+vEdM4kHJYur7pxXjd+Nx2gFFV2QzXDPCOSfZyzV/3S4fPDntda/fKgJ5WL6Ci5gHOcaXC8Fai19LxSMpqrbRFe98bPFLZhg59moia/HR5DHOgw0o/sEBFxEPsmsu+VwDEBUP4KJh1s8VHAg54cc+LWRJxbyte9zp94qYWH7SxYODHKYauiwtPBKxFslLj7oYGQ8KU67E3D+Oxxb52Hr0WOPiQVKYMn4OHmuYDdJjlWtcPFzsjE16jyA6eGQwF3z6+7oYFw8LJ133biA6eKB5BV3+vi5GxYPNcNKP3iO6Dh4evCXf/ZSgXePikeGky6doH0fUX6W/r4tR8bAITnp8ivHDhzaSG/y+LkbGA16bhN5T8IiAp4Cee9TFuHjQI0z50t8g1GIPzg/C39MezWNkPCwXXAxYf4eJFh5CjBjlzs9/3q6R8WAkbi6FSX9zUBOPie8RWoY8Jq8//3GHRsbDYnxeXdlmGnDo4jEJP49ZNtv3DUAdGw+LuQs/iKLw/awnjFQXj6IcGhajRsej6LOI5xGio3Ho5aFDI+RR1pE2GR6SbuehUYaHpLvyKDZ6/GM8ok0QhNcvUkahbQcb4e/vxoPxfBKaE+GEt0IZnMdm/rFKkmSxWn46cqX15BH4u2NGiesSmq2mivsjhfNlwtxcxErW/rchewsPEGjQ+Lmp/DOjfLZ7j+3Aft3OpwurZTqmhcd6Jeir2uPjn/eNzpfCvq7LWKXCVMmrje+x8djNw/laQR3F3NvTmVu8eZfi5+UnfL3tynZ8JoXV9F3OPD+Lcrp+y3ptvBUUVxXHU/Fnp/BqMX4GeQnniTL8Qc/6OaeN6vXzKRF+LZ+zWR5A3Bij7hE+v5OH7VIoVzB3nIUrFTC//6LVPg3OLg5iY+4svoUH4/CW1fq5aLXn98vrkM/kN+PdU8yRtfAACXjNQ/CulfsabE/2t1EyF+/UxSPE1ScsX8cLV93+2aFlNcZXWgzscNLBA1R+lP+gjFyKvhT1MRyPrbLLZIdUuFMHjwg7s0mzLrzrMI75TLXlaN3Cz3J3E+08SNsK3UoCMhiPwG4LF3OF3HfwWKD3mdRXg6Rz0kMt2eO8ak/hpplmHrQ9rm+G62QoHp4tPbp5QjMPauexRzXI67WHmP3gq2AebiH4ZvDO4F/9eWyksIdGMe6DB+PRESsmdDytPKYoxovOKohSkWTRBOb3dIMRoYFHPGnXGvVYA/GwuqxSRutHtPEQV7zKJPUrf9UiEPkQs+vcYtP159EpG2V/KB7dZU6rO7XwiN9QCl5lO5rBdldsxsiFH30Qpr2b7AqCTd7uywOHQDwFD7qq7qTmEeDJUDMFWKJ48+y0DQJ7e7Lg7+JK9/Qml8e9eaBgkKF55Haz3ME0HZaSxwY7tA/Nohw0l1ljzKSQYUMwVHRwZatS73G6Nw/U3w7Lg7jZ13lBJWuhri0lD9QlWe5J/WSaiA4r2KiaqBcphjCHcZz67/PPPXPlSYc+HsF2q6jsaPYwHtTyLxUWY4OBfH6nUfHARhNp4lHByMwy6D+0waBDvicA0ujBPb9OF39JZqImHsGauCT/by3V5hm8AwPy4F9NCjTNq0N+FTx22PBYNbcRB0MmFQW0hAo5PvAC2c4Otlr18EjfLp0h41K0IKym4XgwYATAt7Qe0GUeqWR4NDcBJr8cNhyJSatHwNexaZmVsJdMCw/nrTUNGtAH44FeXzgQs6rnl3g4aKbLPCE7J9HiVJQENB9WJgzhiwANk1LoBB8dPKKu/WPbB/FAsZXQ8Z618LBxf86DlufKwf+Ql+WWZnIM3wNFIphKC48UJPLgRfsx4wf0q08me5CN6q2HPJbyTFdczgjFjQ70vAmxwAZLXq6TvQAeOFMXafbvTiZfoKwH6E2DFvpw/hL0IPjOMCWP9RHNP99A5aB3nUsCqS/btuAOpky5orsD84D+PCI4JKE7BtYjeFgZug2cqnIVD8np5abgFv5NhvbF6w0NFrUjfKuZh41GJHhoZeA9pH3gnhoMY7WB3rnBiKPB93S1Q6YsaTHBgtYX3h/7LWDBa+CB/Jf8BK4+iMcCpYlv5sGQ1xz2Kz+KLSI8vcL7aSpZenngmBT4Wj2IB5peTewreKD+Cm+kvm233oUH2OvIW1YmZnp5+E/Ig65Qmit4sAQumTMCZyY38ihsHFT4gXi0OCMuGg8P+oHeLNRj/YIHbB9tfljxjwyPJs0aH3gAzenrF1jKZ5Q8MnA79fHcG83j+R/iYSPXPNiwl0L7g3aLFCvucH7VcnJBrHm++4d4IHs6/00YQqAJk+yW3fqIpLKp3CVom6zhAXjgHosK82Zg2UoTOLWgfc6VA4jm+Ku/xcNGDUQIDopEVoxdtc8atje8gbwUNBcMD8hD6rGECloCf+FVxwpBn5dqRN/ASfbz8fh5a8tdeeAei1n1EAJ9Loqw0MkK1zdermVSj4XiUp+PRzr32+QoEmjnEeAhve5k0GxJ7nxOhKzR6wT9/Hk3B43+cIFX65+MR7Gft03uXpFAO4/JJ+6xaocc7Ms43r9TxIXyGTTCpeBEvm/WVMIXC9uYT8ejQ9Wd78xDOgavLi86UIevRIdKeCaXSgNL5JF0ph5lx5Nj23bs7z3Zg294NGma+ET43CZ6FzUd6r3Ucb2navsRIwCTvGrCyo2Wxf8UZTQ8mjR1/4PnWLyObsO7Qri3OvnzdHcUz+/mmVCpcgO5ZKGl0IZHk6YZD6Qeq3qILeWVlrGfsHoZPzWz9pvC2w0PIU3DQ+qx6iLPrzrHhb2lzaOXtwAxPJo0wnwJ91jNh8hergFCxDqIcCeHi/XM/pLOjA/HQ+qxmi/1YVQKoaDQEEdowz9eiuUxPJo0Ig/pw39NMIL/w441Jh0pH8zal074ArA3PJo0wL6Teqxm9XubdPVZ3JPDFsJjW4ri+wzPvF7bpUF5SD0Wm9Vzps2Ute2mpmSv2n8eTbmqz2LuPnru9fMuDcsjwK+06B+xl0oilBzbzteMV0Tq54hXBpA+GY+Z2+6yAjrsFQneKu/S7k10dUnxV+JV8vb9Dq8P4u3RSb4vIEmRShwXgmlSHlVTVxajxDq3RCyU2u494TyZ4vvj08tr4QnlefsND/SNI8gDbYwIf+Sxda7Vdw8OTrnZVm7vAPyKz3WJwNWq2mLV7WvJGQDO2yg+rWa1+9Oa7f2fPs4b+vvEu/w5zc71n4PywHug816Xa0HLypfPVuLvS7SFls1AqjNsPH/se3ebYPvup5/p+za47kiyKHh1fH/uBNcd84ViDWHIRNM21T8rr8JhTOCxueFQtX9Wg52fOD/nWvY56/uf0EA8NsdpjmLjLNQRYkaVhuERLaoBdaXcMWRUaRgeH/NJuMj7q3wS5JlBpEuD8NjM8qmfG4YOyR+INwAbibozj8suYWea8yg+vvNflHddjy7yU+u2xazbeZRBS6lftI/lblGEj7NHF/mpFer5jEErj/KYtffP4kH2Ki2eKH00zEjUXs93tVt0CWUKF2V/tSm8etseX6v7FxTo+Ipzm+i3yzqfWAWHycTPuRz/mANFuxzZLaxJjHvfXr4giSaFBbKdpI/5psCY9LrgRD57oL8IPdfuEScpfanRx3W7KP5xxZ/TO8gXe6bgfNx9rDPjLnkabbaOGTqMjIyMjIyMjIyMjIyMjIyMjIyMjMas/wGEYevlvn8BnwAAAABJRU5ErkJggg==" alt="Logo 1" className="cursor-pointer h-20 w-36" />
        </a>
        <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">
          <img src="data:image/png;base64,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" alt="Logo 2" className="cursor-pointer h-40 w-40" />
        </a>
       
      </div>

      <div className="text-2xl font-bold text-indigo-500 mb-4 underline">Design and Creativity</div>
      <div className="flex items-center space-x-4 mb-8">
        <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
          <img src="data:image/png;base64,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" alt="Logo 1" className="cursor-pointer h-20 w-36" />
        </a>
        <a href="https://www.adobe.com/creativecloud.html" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/2101px-Adobe_Creative_Cloud_rainbow_icon.svg.png" alt="Logo 2" className="cursor-pointer h-40 w-40" />
        </a>
       
      </div>

      <div className="text-2xl font-bold text-indigo-500 mb-4 underline">Open Source Contribution</div>
      <div className="flex items-center space-x-4 mb-8">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src="data:image/png;base64,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" alt="Logo 1" className="cursor-pointer h-20 w-36" />
        </a>
        <a href="https://about.gitlab.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*YjOtv5OOEP744YTdzBxWsw.png" alt="Logo 2" className="cursor-pointer h-40 w-40" />
        </a>
       
      </div>

    </div>
  );
};

export default Resources;
