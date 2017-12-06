 var signs = ["Aries", "Taurus","Gemini","Cancer", "Leo","Libra", "Virgo", "Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"];
 var text = ["You like to get things done. You are very productive in the early mornings, and enjoy jogs followed by coffee. You chose to finish work early, long before the deadline. You are clear minded, and is excited by the prospect of the future. However, you are not very reflective, and sometimes lack compassion or even care for other people."
     , "You are calm, and knowledgeable. You see the importance of hard work, and go about it in a calm subtle way. You are not adverse to change, but do not need it constantly. You love vineyards, and mid morning breakfasts. You generally make people very comfortable to be around you. "
 , "You are warm and down to earth. You can live in the city, but have a great affinity for the country. You love the color of rich soil and brown and orange sunsets. You enjoy the company of family, and are extremely reflective. You are spontaneous, and love road trips. "
 , "You fascinate other people and are hard to understand. You crave new experiences, and are a bit of an adrenaline junky. You love the sun, and beaches and new people.",
 "You are constantly doing something, but are not obsessive about it. People get to know you very easily, and enjoy having you around.You are generally excited about the next phase of your life, but have a good understanding of the hard work in front of you"
 , "You are analyzing, practical, reflective and thoughtful. Can be scrutinizing and critical. You appreciate high integrity. Understand the true definition of value and quality."
 , "You are balanced, just, truthful , and beautiful. You easily sees both sides of an argument. You are Highly skilled at problem-solving and decision making."
 , "You are transient, self-willed, purposeful, and unyielding. Not easy to pin down or predict. You are prone to jealousy and possessiveness. You are incredibly driven. This drive can be expressed in vocation, beliefs sport, or relationships.",
 "You enjoy motion, experimentation, and constantly feel optimism. You are uneasy with routine and stagnation. Requires stimulation. You are imaginative and creative. You appreciate accumulation of knowledge and philosophy."
 , "You are determined, dominant, persevering, practical, and willful. Easily accepts obligation and responsibility. You live by a moral code which is often traditional and conventional. You are a skilled strategic thinker, able to easily problem solve."
 , "You are serious, insightful, duplicitous. You are an original thinker, able to deftly move around problems with unorthodox solutions. You are idealistic, and prefers equal opportunity for all. You tend to be the defender of underdogs."
 , "You have depth, imagination, but are reactive and indecisive. You are deeply intuitive, often lives and thinks in a different world than others. You are a dreamer on multiple levels (in goals and in imagination). You find difficulty facing reality. You are Highly artistic and easily expressive. "]
var chinazo = [" You were born in the year of the Rat","You were born in the year of the Ox","You were born in the year of the Tiger","You were born in the year of the Rabbit" ,"You were born in the year of the Dragon","You were born in the year of the Snake","You were born in the year of the Horse","You were born in the year of the Goat","You were born in the year of the Monkey","You were born in the year of the Rooster","You were born in the year of the Dog","You were born in the year of the Pig"];
     function horoscope() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    console.log(month);
    console.log(day);

    var sign = findHoroscope(month,day);
    console.log(sign);
    console.log(chinazodiac(year));
    document.getElementById("signDiv").innerHTML = sign;


    var year = parseInt(document.getElementById("year").value);
    var china = chinazodiac(year);
    console.log(china);
    document.getElementById("zodiacDiv").innerHTML = chinazo[china];

    document.getElementById("messageDiv").innerHTML = text[signs.indexOf(sign)];
    document.getElementById("getimage").innerHTML = "<img src='img/" + sign + ".png'>";

}


 function findHoroscope(month, day) {
    if (month == 3 && day >= 21 || month == 4 && day <= 19) {
        return signs[0];
    }
    if (month == 4 && day >= 20 || month == 5 && day <= 20) {
        return signs[1];
    }
    if (month == 5 && day >= 21 || month == 6 && day <= 20) {
        return signs[2];
    }
    if (month == 6 && day >= 21 || month == 7 && day <= 22) {
        return signs[3];
    }
    if (month == 7 && day >= 23 || month == 8 && day <= 22) {
        return signs[4];
    }
    if (month == 8 && day >= 23 || month == 9 && day <= 22) {
        return signs[5];
    }
    if (month == 9 && day >= 23 || month == 10 && day <= 22) {
        return signs[6];
    }
    if (month == 10 && day >= 23 || month == 11 && day <= 21) {
        return signs[7];
    }
    if (month == 11 && day >= 22 || month == 12 && day <= 21) {
        return signs[8];
    }
    if (month == 12 && day >= 23 || month == 1 && day <= 19) {
        return signs[9];
    }
    if (month == 1 && day >= 20 || month == 2 && day <= 18) {
        return signs[10];
    }
    if (month == 2 && day >= 19 || month == 3 && day <= 20) {
        return signs[11];
    }
}
 function chinazodiac(year) {
    console.log(year);
     if (year == 1960 || year == 1972 || year == 1984 || year == 1996 || year == 2008) {
         return 0;
     }
     if (year == 1961 || year == 1973 || year == 1985 || year == 1997 || year == 2009) {
         return 1;
     }
     if (year == 1962 || year == 1974 || year == 1986 || year == 1998 || year == 2010) {
         return 2;
     }
     if (year == 1963 || year == 1975 || year == 1987 || year == 1999 || year == 2011) {
         return 3;
     }
     if (year == 1964 || year == 1976 || year == 1988 || year == 2000 || year == 2012) {
         return 4;
     }
     if (year == 1965 || year == 1977 || year == 1989 || year == 2001 || year == 2013) {
         return 5;
     }
     if (year == 1966 || year == 1978 || year == 1990 || year == 2002 || year == 2014) {
         return 6;
     }
     if (year == 1967 || year == 1979 || year == 1991 || year == 2003 || year == 2015) {
         return 7;
     }
     if (year == 1968 || year == 1980 || year == 1992 || year == 2004 || year == 2016) {
         return 8;
     }
     if (year == 1969 || year == 1981 || year == 1993 || year == 2005 || year == 2017) {
         return 9;
     }
     if (year == 1970 || year == 1982 || year == 1994 || year == 2006) {
         return 10;
     }
     if (year == 1971 || year == 1983 || year == 1995 || year == 2007) {
         return 11;
     }
 }

function monthdayz(month){
         var result = "";
         var daysinmonths = [0,31,28,31,30,31,30,31,31,30,31,30,31]
        for(i=1; i<=daysinmonths[month];i++){
            result += "<option value =" + i + ">" + i + "</option>";
        }
document.getElementById("day").innerHTML = result;
     }