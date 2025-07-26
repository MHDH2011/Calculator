document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    const input_bar = document.getElementById("input_bar");
    let memory = "";

    for (let btn of buttons) {
        btn.onclick = function () {
            if (btn.value) input_bar.value += btn.value;
        };
    }

    document.getElementById("clear").onclick = function () {
        input_bar.value = "";
    };

    document.getElementById("backspace").onclick = function () {
        input_bar.value = input_bar.value.slice(0, -1);
    };

    document.getElementById("symmertic").onclick = function () {
        input_bar.value = `-(${input_bar.value})`;
    };

    document.getElementById("abs").onclick = function () {
        input_bar.value = `abs(${input_bar.value})`;
    };

    document.getElementById("floor").onclick = function () {
        input_bar.value = `floor(${input_bar.value})`;
    };

    document.getElementById("ceil").onclick = function () {
        input_bar.value = `ceil(${input_bar.value})`;
    };

    document.getElementById("ln").onclick = function () {
        input_bar.value = `log(${input_bar.value})`;
    };

    document.getElementById("root").onclick = function () {
        input_bar.value = `nthRoot(${input_bar.value}, 2)`;
        input_bar.focus();
        input_bar.setSelectionRange(
            input_bar.value.length - 2,
            input_bar.value.length - 1
        );
    };

    document.getElementById("factorial").onclick = function () {
        input_bar.value = `factorial(${input_bar.value})`;
    };

    document.getElementById("factorial").onclick = function () {
        input_bar.value = `factorial(${input_bar.value})`;
    };

    // Memory handling
    document.getElementById("memory-store").onclick = function () {
        memory = input_bar.value;
        document.getElementById("memory-recall").disabled = false;
        document.getElementById("memory-clear").disabled = false;
    };

    document.getElementById("memory-plus").onclick = function () {
        memory = `${memory} + (${input_bar.value})`;
        document.getElementById("memory-recall").disabled = false;
        document.getElementById("memory-clear").disabled = false;
    };

    document.getElementById("memory-minus").onclick = function () {
        memory = `${memory} - (${input_bar.value})`;
        document.getElementById("memory-recall").disabled = false;
        document.getElementById("memory-clear").disabled = false;
    };

    document.getElementById("memory-recall").onclick = function () {
        input_bar.value += math.evaluate(memory);
    };

    document.getElementById("memory-clear").onclick = function () {
        input_bar.value = "";
        document.getElementById("memory-recall").disabled = true;
        document.getElementById("memory-clear").disabled = true;
    };

    document.getElementById("equal").onclick = function () {
        try {
            input_bar.value = math.evaluate(input_bar.value);
        } catch {
            input_bar.value = "Error";
        }
    };

    // Clicking Handling

    buttons.forEach((num) => {
        document.addEventListener("keydown", (event) => {
            if (event.key === num.value) {
                num.onclick();
            }
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            document.getElementById("equal").onclick();
        } else if (event.key === "Backspace") {
            document.getElementById("backspace").onclick();
        } else if (event.key.toLowerCase() === "c") {
            document.getElementById("clear").onclick();
        } else if (event.key.toLowerCase() === "p") {
            document.getElementById("pi").onclick();
        } else if (event.key.toLowerCase() === "s") {
            document.getElementById("symmertic").onclick();
        } else if (event.key === "!") {
            document.getElementById("factorial").onclick();
        }
    });
});
