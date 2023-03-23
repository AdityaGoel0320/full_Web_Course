            let str = "";
            let inp_el = document.getElementById("inp");
            let btn_el = document.getElementsByTagName("button")
            console.log(btn_el)



            Array.from(btn_el).forEach((x) => {

                x.addEventListener("click", fnc)

            });


            function fnc(e) {
                if (e.target.innerHTML == "=") {
                    str = eval(str);
                    inp_el.value = str;
                }
                else if (e.target.innerHTML == "C") {
                    str = "";
                    inp_el.value = str;

                }
                else {
                    str = str + e.target.innerHTML;
                    inp_el.value = str;
                }

            }



