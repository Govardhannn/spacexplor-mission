import Flag_of_Europe from './flags/Flag_of_Europe.svg'
import Flag_of_India from './flags/Flag_of_India.svg'
import Flag_of_Israel from './flags/Flag_of_Israel.svg'
import Flag_of_Japan from './flags/Flag_of_Japan.svg'
import Flag_of_Russia from './flags/Flag_of_Russia.svg'
import Flag_of_South_Korea from './flags/Flag_of_South_Korea.svg'
import Flag_of_China from './flags/Flag_of_China.svg'
import Flag_of_the_Soviet_Union from './flags/Flag_of_the_Soviet_Union.svg'
import Flag_of_the_United_States from './flags/Flag_of_the_United_States.svg'
import Flag_of_the_United_Arab_Emirates from './flags/Flag_of_the_United_Arab_Emirates.svg'
import ESA_logo from './agency_logos/ESA_logo.svg'
import ISRO_logo from './agency_logos/ISRO_Logo.svg'
import Jaxa_logo from './agency_logos/Jaxa_logo.svg'
import KARI from './agency_logos/KARI.png'
import NASA_logo from './agency_logos/NASA_logo.svg'
import Roscosmos_logo from './agency_logos/Roscosmos_logo.svg'
import SpaceIL_logo from './agency_logos/SpaceIL_logo.svg'
import SpaceX_Logo from './agency_logos/SpaceX_Logo.svg'
import UAESA from './agency_logos/UAESA_Logo.svg'
import CNSA from './agency_logos/CNSA.svg'
import Aditya_L1 from './missions/Aditya_L1.jpg';
import akatsuki from './missions/akatsuki.jpg';
import apollo11 from './missions/apollo11.jpg';
import artemis from './missions/artemis.jpg';
import BepiColombo from './missions/BepiColombo.png';
import Beresheet from './missions/Beresheet.jpg';
import Chandrayaan_1 from './missions/Chandrayaan-1.jpg';
import chandrayaan3 from './missions/chandrayaan3.webp';
import Change6 from './missions/Change6.jpg';
import Change4 from './missions/Change4.png';
import Danuri from './missions/Danuri.png';
import Euclid from './missions/Euclid.jpeg';
import Gaganyaan from './missions/Gaganyaan.avif';
import Giotto from './missions/Giotto.jpeg';
import Hayabusa from './missions/Hayabusa.jpeg';
import Hayabusa2 from './missions/Hayabusa2.jpg';
import Hope_mars from './missions/Hope_mars.jpeg';
import hubble from './missions/hubble.jpeg';
import JamesTele from './missions/Jamestele.jpg';
import Mangalyaan from './missions/Mangalyaan.jpeg';
import mars_rover from './missions/mars_rover.jpeg';
import Mir_Space_Station from './missions/Mir_Space_Station.jpg';
import MMX from './missions/MMX.jpeg';
import Rosetta from './missions/Rosetta.jpg';
import shenzhou5 from './missions/shenzhou5.jpeg';
import SLIM from './missions/SLIM.webp';
import soyuz from './missions/soyuz.jpg';
import sputnik from './missions/sputnik.jpg';
import Tiangong_Space_Station from './missions/Tiangong_Space_Station.jpg';
import tianwen_1 from './missions/tianwen-1.png';
import venera7 from './missions/venera7.jpeg';
import Vostok from './missions/Vostok.jpg';
import voyager1and2 from './missions/voyager12.png';
import Crew_Dragon from './missions/Crew_Dragon.jpg';

const missions = [
    {
        "missionId": 1,
        "missionName": "Apollo 11",
        "missionYear": 1969,
        "agency": "NASA",
        "country": "United States of America",
        "missionStatus": "success",
        "description": "This historic mission successfully landed the first humans on the Moon. Neil Armstrong and Buzz Aldrin's lunar landing was a monumental achievement for humanity, fulfilling President Kennedy's goal of reaching the Moon before the end of the decade. It marked a pivotal moment in the space race and human exploration.",
        "agencyLogo": NASA_logo,
        "countryFlag": Flag_of_the_United_States,
        "missionImage": apollo11
    },
    {
        "missionId": 2,
        "missionName": "Voyager 1 & 2",
        "missionYear": 1977,
        "agency": "NASA",
        "country": "United States of America",
        "missionStatus": "ongoing",
        "description": "Launched to study the outer planets, the Voyager probes have provided invaluable data on Jupiter, Saturn, Uranus, and Neptune. Voyager 1 is the farthest human-made object from Earth, having entered interstellar space and continuing its journey. These missions have revolutionized our understanding of the outer solar system.",
        "agencyLogo": NASA_logo,
        "countryFlag": Flag_of_the_United_States,
        "missionImage": voyager1and2
    },
    {
        "missionId": 3,
        "missionName": "Hubble Space Telescope",
        "missionYear": 1990,
        "agency": "NASA & ESA",
        "country": "United States of America",
        "missionStatus": "ongoing",
        "description": "A joint mission with the European Space Agency, the Hubble Space Telescope has revolutionized astronomy by providing stunning, high-resolution images of the universe. Its discoveries have reshaped our understanding of the cosmos, from distant galaxies to planetary nebulae, and continue to provide groundbreaking data.",
        "agencyLogo": NASA_logo,
        "countryFlag": Flag_of_the_United_States,
        "missionImage": hubble
    },
    {
        "missionId": 4,
        "missionName": "Mars Perseverance Rover",
        "missionYear": 2020,
        "agency": "NASA",
        "country": "United States of America",
        "missionStatus": "ongoing",
        "description": "The Perseverance rover landed on Mars to search for signs of ancient microbial life in the Jezero Crater. It is also collecting rock and soil samples for a potential future return to Earth and testing new technologies for future robotic and human exploration of Mars, including the Ingenuity helicopter.",
        "agencyLogo": NASA_logo,
        "countryFlag": Flag_of_the_United_States,
        "missionImage": mars_rover
    },
    {
        "missionId": 5,
        "missionName": "Artemis Program",
        "missionYear": "Ongoing",
        "agency": "NASA",
        "country": "United States of America",
        "missionStatus": "ongoing",
        "description": "This program aims to return humans to the Moon, including the first woman and first person of color, establishing a sustainable presence. It is a crucial stepping stone for future crewed missions to Mars, developing technologies for deep-space exploration and commercial partnerships.",
        "agencyLogo": NASA_logo,
        "countryFlag": Flag_of_the_United_States,
        "missionImage": artemis
    },
    {
        "missionId": 6,
        "missionName": "Sputnik 1",
        "missionYear": 1957,
        "agency": "Soviet Union",
        "country": "Russia",
        "missionStatus": "success",
        "description": "The launch of Sputnik 1 marked the dawn of the Space Age as the first artificial satellite to orbit Earth. This event catalyzed the space race between the Soviet Union and the United States, demonstrating early orbital capabilities and inspiring global scientific and technological advancements.",
        "agencyLogo": Flag_of_the_Soviet_Union,
        "countryFlag": Flag_of_Russia,
        "missionImage": sputnik
    },
    {
        "missionId": 7,
        "missionName": "Vostok 1",
        "missionYear": 1961,
        "agency": "Soviet Union",
        "country": "Russia",
        "missionStatus": "success",
        "description": "Yuri Gagarin became the first human to journey into outer space and orbit the Earth aboard the Vostok 1 spacecraft. This was a pivotal moment in human spaceflight history, proving that humans could survive in space and opening the door for future crewed missions.",
        "agencyLogo": Flag_of_the_Soviet_Union,
        "countryFlag": Flag_of_Russia,
        "missionImage": Vostok
    },
    {
        "missionId": 8,
        "missionName": "Venera 7",
        "missionYear": 1970,
        "agency": "Soviet Union",
        "country": "Russia",
        "missionStatus": "success",
        "description": "This mission accomplished the first successful soft landing of a spacecraft on another planet, Venus. It transmitted data from the Venusian surface for a short period, providing the first direct measurements from another world's atmosphere and surface conditions, a remarkable engineering feat.",
        "agencyLogo": Flag_of_the_Soviet_Union,
        "countryFlag": Flag_of_Russia,
        "missionImage": venera7
    },
    {
        "missionId": 9,
        "missionName": "Mir Space Station",
        "missionYear": 1986,
        "agency": "Soviet Union/Russia",
        "country": "Russia",
        "missionStatus": "success",
        "description": "Mir was the first modular space station and was continuously inhabited for nearly a decade, setting endurance records for human presence in space. It served as a microgravity research laboratory and set the stage for international cooperation in space, leading to the International Space Station.",
        "agencyLogo": Flag_of_the_Soviet_Union,
        "countryFlag": Flag_of_Russia,
        "missionImage": Mir_Space_Station
    },
    {
        "missionId": 10,
        "missionName": "Soyuz Program",
        "missionYear": "Ongoing",
        "agency": "Roscosmos",
        "country": "Russia",
        "missionStatus": "ongoing",
        "description": "The Soyuz spacecraft have been the workhorse of human spaceflight for over five decades, known for their reliability and robust design. They have been instrumental in transporting cosmonauts and astronauts to space stations like Salyut, Mir, and the International Space Station, serving as a vital transport system.",
        "agencyLogo": Roscosmos_logo,
        "countryFlag": Flag_of_Russia,
        "missionImage": soyuz
    },
    {
        "missionId": 11,
        "missionName": "Shenzhou 5",
        "missionYear": 2003,
        "agency": "CNSA",
        "country": "China",
        "missionStatus": "success",
        "description": "This mission made China the third country to independently send a human into space, with Yang Liwei aboard. His flight aboard Shenzhou 5 was a significant milestone for the Chinese space program, demonstrating its growing capabilities and ambition in human spaceflight.",
        "agencyLogo": CNSA,
        "countryFlag": Flag_of_China,
        "missionImage": shenzhou5
    },
    {
        "missionId": 12,
        "missionName": "Chang'e 4",
        "missionYear": 2019,
        "agency": "CNSA",
        "country": "China",
        "missionStatus": "success",
        "description": "Chang'e 4 achieved the first-ever soft landing on the far side of the Moon, a technically challenging feat due to communication difficulties. The mission's lander and rover (Yutu-2) have been conducting scientific research in a previously unexplored region, providing unique data on lunar geology.",
        "agencyLogo": CNSA,
        "countryFlag": Flag_of_China,
        "missionImage": Change4
    },
    {
        "missionId": 13,
        "missionName": "Tiangong Space Station",
        "missionYear": "Ongoing",
        "agency": "CNSA",
        "country": "China",
        "missionStatus": "ongoing",
        "description": "China is currently constructing its own modular space station, Tiangong, designed for long-term human presence in low Earth orbit. The station will serve as a long-term platform for scientific research and demonstrate China's growing capabilities in human spaceflight and orbital operations, fostering international collaboration.",
        "agencyLogo": CNSA,
        "countryFlag": Flag_of_China,
        "missionImage": Tiangong_Space_Station
    },
    {
        "missionId": 14,
        "missionName": "Tianwen-1",
        "missionYear": 2021,
        "agency": "CNSA",
        "country": "China",
        "missionStatus": "success",
        "description": "This ambitious mission successfully placed an orbiter, a lander, and a rover (Zhurong) on Mars in a single launch, a first for any nation. It marked a significant step forward for China's interplanetary exploration program, studying Martian geology, atmosphere, and potential for past or present life.",
        "agencyLogo": CNSA,
        "countryFlag": Flag_of_China,
        "missionImage": tianwen_1
    },
    {
        "missionId": 15,
        "missionName": "Chang'e 6",
        "missionYear": 2024,
        "agency": "CNSA",
        "country": "China",
        "missionStatus": "success",
        "description": "This groundbreaking mission successfully collected and returned the first-ever samples from the far side of the Moon, a complex and unprecedented feat. It builds on the success of previous Chang'e missions and furthers our understanding of lunar geology and evolution, providing invaluable scientific material.",
        "agencyLogo": CNSA,
        "countryFlag": Flag_of_China,
        "missionImage": Change6
    },
    {
        "missionId": 16,
        "missionName": "Giotto",
        "missionYear": 1985,
        "agency": "ESA",
        "country": "Europe",
        "missionStatus": "success",
        "description": "Giotto was ESA's first deep-space mission and made a historic flyby of Halley's Comet during its 1986 apparition. It provided the first close-up images of a comet's nucleus, revealing a dark, potato-shaped body and valuable data on its composition and activity.",
        "agencyLogo": ESA_logo,
        "countryFlag": Flag_of_Europe,
        "missionImage": Giotto
    },
    {
        "missionId": 17,
        "missionName": "Rosetta",
        "missionYear": 2004,
        "agency": "ESA",
        "country": "Europe",
        "missionStatus": "success",
        "description": "This mission was the first to orbit and land a probe (Philae) on a comet, Comet 67P/Churyumov–Gerasimenko. The Rosetta spacecraft orbited for two years, providing unprecedented insights into cometary activity, composition, and the origins of water on Earth.",
        "agencyLogo": ESA_logo,
        "countryFlag": Flag_of_Europe,
        "missionImage": Rosetta
    },
    {
        "missionId": 18,
        "missionName": "BepiColombo",
        "missionYear": 2018,
        "agency": "JAXA",
        "country": "Europe",
        "missionStatus": "ongoing",
        "description": "A joint mission with JAXA, BepiColombo is on its way to Mercury, expected to arrive in 2025 after a complex series of flybys. It will study the planet's composition, magnetosphere, and internal structure to understand its formation and evolution in the inner solar system, using two separate orbiters.",
        "agencyLogo": Jaxa_logo,
        "countryFlag": Flag_of_Europe,
        "missionImage": BepiColombo
    },
    {
        "missionId": 19,
        "missionName": "James Webb Space Telescope",
        "missionYear": 2021,
        "agency": "NASA, ESA",
        "country": "Europe",
        "missionStatus": "ongoing",
        "description": "A successor to Hubble, the James Webb Space Telescope is the most powerful space telescope ever built, observing primarily in infrared light. It is designed to observe the most distant objects in the universe, study the formation of the first galaxies and stars, and characterize exoplanet atmospheres.",
        "agencyLogo": ESA_logo,
        "countryFlag": Flag_of_Europe,
        "missionImage": JamesTele
    },
    {
        "missionId": 20,
        "missionName": "Euclid",
        "missionYear": 2023,
        "agency": "ESA",
        "country": "Europe",
        "missionStatus": "ongoing",
        "description": "The Euclid mission is designed to create the largest and most accurate 3D map of the universe by observing billions of galaxies over a vast cosmic volume. It will investigate the mysteries of dark matter and dark energy, which are believed to make up the majority of the cosmos, shedding light on cosmic acceleration.",
        "agencyLogo": ESA_logo,
        "countryFlag": Flag_of_Europe,
        "missionImage": Euclid
    },
    {
        "missionId": 21,
        "missionName": "Chandrayaan-1",
        "missionYear": 2008,
        "agency": "ISRO",
        "country": "India",
        "missionStatus": "success",
        "description": "India's first lunar probe, Chandrayaan-1, was instrumental in the discovery of water molecules on the Moon's surface through its Moon Mineralogy Mapper instrument. This finding has had a profound impact on our understanding of the Moon's resources and potential for future human exploration.",
        "agencyLogo": ISRO_logo,
        "countryFlag": Flag_of_India,
        "missionImage": Chandrayaan_1
    },
    {
        "missionId": 22,
        "missionName": "Mangalyaan (Mars Orbiter Mission)",
        "missionYear": 2013,
        "agency": "ISRO",
        "country": "India",
        "missionStatus": "success",
        "description": "This mission made India the fourth country to successfully place a spacecraft in Mars' orbit and the first to do so on its maiden attempt. Mangalyaan studied the Martian atmosphere and surface features, demonstrating India's deep-space capabilities with a highly cost-effective mission.",
        "agencyLogo": ISRO_logo,
        "countryFlag": Flag_of_India,
        "missionImage": Mangalyaan
    },
    {
        "missionId": 23,
        "missionName": "Chandrayaan-3",
        "missionYear": 2023,
        "agency": "ISRO",
        "country": "India",
        "missionStatus": "success",
        "description": "Following the partial success of its predecessor, Chandrayaan-3 achieved a historic soft landing near the lunar south pole. This made India the fourth country to land on the Moon and the first to do so in this unique and scientifically significant region, paving the way for future lunar missions.",
        "agencyLogo": ISRO_logo,
        "countryFlag": Flag_of_India,
        "missionImage": chandrayaan3
    },
    {
        "missionId": 24,
        "missionName": "Aditya-L1",
        "missionYear": 2023,
        "agency": "ISRO",
        "country": "India",
        "missionStatus": "ongoing",
        "description": "India's first dedicated solar observatory, Aditya-L1, is positioned at the Sun-Earth Lagrange point 1 for continuous observation of the Sun. It will provide unprecedented data on the Sun's outermost layers, solar phenomena like coronal mass ejections, and their impact on space weather.",
        "agencyLogo": ISRO_logo,
        "countryFlag": Flag_of_India,
        "missionImage": Aditya_L1
    },
    {
        "missionId": 25,
        "missionName": "Gaganyaan",
        "missionYear": "In Development",
        "agency": "ISRO",
        "country": "India",
        "missionStatus": "upcoming",
        "description": "This is India's ambitious crewed orbital spacecraft mission, aiming to send astronauts into low Earth orbit. A successful Gaganyaan mission will make India the fourth nation to independently send humans into space, marking a major leap in its space program and technological prowess.",
        "agencyLogo": ISRO_logo,
        "countryFlag": Flag_of_India,
        "missionImage": Gaganyaan
    },
    {
        "missionId": 26,
        "missionName": "Hayabusa",
        "missionYear": 2003,
        "agency": "JAXA",
        "country": "Japan",
        "missionStatus": "success",
        "description": "This was the first mission to successfully land on, take off from, and return samples from an asteroid (Itokawa). Despite facing numerous technical challenges, Hayabusa brought back precious grains, proving the feasibility of asteroid sample return and contributing to planetary science.",
        "agencyLogo": Jaxa_logo,
        "countryFlag": Flag_of_Japan,
        "missionImage": Hayabusa
    },
    {
        "missionId": 27,
        "missionName": "Akatsuki",
        "missionYear": 2010,
        "agency": "JAXA",
        "country": "Japan",
        "missionStatus": "ongoing",
        "description": "Japan's Venus Climate Orbiter, Akatsuki, is studying the planet's complex atmosphere and super-rotating clouds. After an initial orbital insertion failure, it successfully entered Venus's orbit in 2015 and continues to provide valuable data on Venusian meteorology and atmospheric dynamics.",
        "agencyLogo": Jaxa_logo,
        "countryFlag": Flag_of_Japan,
        "missionImage": akatsuki
    },
    {
        "missionId": 28,
        "missionName": "Hayabusa2",
        "missionYear": 2014,
        "agency": "JAXA",
        "country": "Japan",
        "missionStatus": "success",
        "description": "Building on the success of its predecessor, Hayabusa2 successfully collected samples from the asteroid Ryugu and returned them to Earth. The mission has provided significant insights into the early solar system, the origin of water, and organic materials, with samples still being analyzed.",
        "agencyLogo": Jaxa_logo,
        "countryFlag": Flag_of_Japan,
        "missionImage": Hayabusa2
    },
    {
        "missionId": 29,
        "missionName": "SLIM (Smart Lander for Investigating Moon)",
        "missionYear": 2023,
        "agency": "JAXA",
        "country": "Japan",
        "missionStatus": "success",
        "description": "The SLIM mission demonstrated a pinpoint landing on the lunar surface with unprecedented accuracy, aiming for a 100-meter target. This 'Moon Sniper' technology will be crucial for future targeted landings on the Moon and other celestial bodies, enabling precise exploration of specific geological features.",
        "agencyLogo": Jaxa_logo,
        "countryFlag": Flag_of_Japan,
        "missionImage": SLIM
    },
    {
        "missionId": 30,
        "missionName": "Martian Moons eXploration (MMX)",
        "missionYear": "In Development",
        "agency": "JAXA",
        "country": "Japan",
        "missionStatus": "upcoming",
        "description": "This upcoming mission aims to explore Mars's two moons, Phobos and Deimos, to understand their origin and evolution. The plan includes landing on Phobos and collecting samples for return to Earth, which could shed light on planetary formation and the history of the Martian system.",
        "agencyLogo": Jaxa_logo,
        "countryFlag": Flag_of_Japan,
        "missionImage": MMX
    },
    {
        "missionId": 31,
        "missionName": "Hope Mars Mission (Al-Amal)",
        "missionYear": 2020,
        "agency": "UAESA",
        "country": "United Arab Emirates",
        "missionStatus": "ongoing",
        "description": "The UAE's first interplanetary mission, Hope, successfully entered Mars orbit in 2021. It is studying the Martian atmosphere and climate dynamics, providing a comprehensive view of the planet's weather patterns and how it loses hydrogen and oxygen into space. This mission marked a significant achievement for the Arab world.",
        "agencyLogo": UAESA,
        "countryFlag": Flag_of_the_United_Arab_Emirates,
        "missionImage": Hope_mars
    },
    {
        "missionId": 32,
        "missionName": "Danuri (Korea Pathfinder Lunar Orbiter)",
        "missionYear": 2022,
        "agency": "KARI",
        "country": "South Korea",
        "missionStatus": "ongoing",
        "description": "South Korea's first lunar mission, Danuri, successfully entered lunar orbit and is conducting scientific observations. It is mapping the lunar surface, studying its magnetic anomalies, and testing new space internet technologies. This mission is a crucial step for South Korea's future lunar exploration plans.",
        "agencyLogo": KARI,
        "countryFlag": Flag_of_South_Korea,
        "missionImage": Danuri
    },
    {
        "missionId": 33,
        "missionName": "Beresheet",
        "missionYear": 2019,
        "agency": "SpaceIL",
        "country": "Israel",
        "missionStatus": "failure",
        "description": "Beresheet was Israel's first attempt at a lunar landing, developed by a non-profit organization. Although the lander crashed during its final descent, it successfully reached lunar orbit and demonstrated significant private sector capabilities. It was a pioneering effort for a privately funded lunar mission.",
        "agencyLogo": SpaceIL_logo,
        "countryFlag": Flag_of_Israel,
        "missionImage": Beresheet
    },
    {
        "missionId": 34,
        "missionName": "Crew Dragon (Demo-2)",
        "missionYear": 2020,
        "agency": "SpaceX (in partnership with NASA)",
        "country": "United States of America",
        "missionStatus": "success",
        "description": "This mission marked the first crewed orbital spaceflight launched from U.S. soil since the Space Shuttle program ended in 2011, and the first by a private company. It successfully transported NASA astronauts to the International Space Station, ushering in a new era of commercial human spaceflight.",
        "agencyLogo": SpaceX_Logo,
        "countryFlag": Flag_of_the_United_States,
        "missionImage": Crew_Dragon
    }
]

export default missions
