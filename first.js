const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {

    counter.innerHTML = 0;


    const updatecounter = () => {

        const targetcount = +counter.getAttribute('data-target');

        const startingcount = Number(counter.innerHTML);

        const incr = targetcount / 1000;

        if (startingcount < targetcount) {
            counter.innerHTML = `${Math.round(startingcount + incr)}`;

            setTimeout(updatecounter,1);
        }
        else{
            counter.innerHTML = targetcount;
        }
    }

    updatecounter();


});
