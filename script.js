let i=0

array = [0,0,0,
         0,0,0,
         0,0,0]

        var one = document.getElementById("one");
    one.onclick = markOne;

    function markOne(){
        if (i === 0) {
            one.classList.add('x')
            i++
            array[0] = 1
        } else {
            i--
            one.classList.add('o')
            array[0] = 2
        }
    }

    var two = document.getElementById("two");
    two.onclick = markTwo;

    function markTwo(){
        if (i === 0) {
            two.classList.add('x')
            i++
            array[1] = 1
        } else {
            i--
            two.classList.add('o')
            array[1] = 2
        }
    }

    var three = document.getElementById("three");
    three.onclick = markThree;

    function markThree(){
        if (i === 0) {
            three.classList.add('x')
            i++
            array[2] = 1
        } else {
            i--
            three.classList.add('o')
            array[2] = 2
        }
    }

    
    var four = document.getElementById("four");
    four.onclick = markFour;

    function markFour(){
        if (i === 0) {
            four.classList.add('x')
            i++
            array[3] = 1
        } else {
            i--
            four.classList.add('o')
            array[3] = 2
        }
    }

    var five = document.getElementById("five");
    five.onclick = markFive;

    function markFive(){
        if (i === 0) {
            five.classList.add('x')
            i++
            array[4] = 1
        } else {
            i--
            five.classList.add('o')
            array[4] = 2
        }
    }

    var six = document.getElementById("six");
    six.onclick = markSix;

    function markSix(){
        if (i === 0) {
            six.classList.add('x')
            i++
            array[5] = 1
        } else {
            i--
            six.classList.add('o')
            array[5] = 2
        }
    }

    var seven = document.getElementById("seven");
    seven.onclick = markSeven;

    function markSeven(){
        if (i === 0) {
            seven.classList.add('x')
            i++
            array[6] = 1
        } else {
            i--
            seven.classList.add('o')
            array[6] = 2
        }
    }

    var eight = document.getElementById("eight");
    eight.onclick = markEight;

    function markEight(){
        if (i === 0) {
            eight.classList.add('x')
            i++
            array[7] = 1
        } else {
            i--
            eight.classList.add('o')
            array[7] = 2
        }
    }

    
    var nine = document.getElementById("nine");
    nine.onclick = markNine;

    function markNine(){
        if (i === 0) {
            nine.classList.add('x')
            i++
            array[8] = 1
        } else {
            i--
            nine.classList.add('o')
            array[8] = 2
        }
    }

    function redWins() {
        if(array == [1,1,1,2,2,0,0,0,0]){
            alert('red wins!')
        }
    }
    
    redWins()