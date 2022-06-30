import Link from "next/link";

export default function FilterCard({ post }) {
    filterSelection("all")
    function filterSelection(c) {
        if (typeof window === 'object') {
            let x, i;
            x = document.getElementsByClassName("card-post");
            if (x !== null) {
                if (c == "all") c = "";
                for (i = 0; i < x.length; i++) {
                    RemoveClass(x[i], "show");
                    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
                }
            }
        }
        
    }

    function AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
        }
    }

    function RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }

    return (
        <>
            <div id="btnContainer">
                <button className="btn-short active" onClick={() => filterSelection('all')}> Show all</button>
                <button className="btn-short" onClick={() => filterSelection('Python')}> Python</button>
                <button className="btn-short" onClick={() => filterSelection('JavaScript')}> JavaScript</button>
                <button className="btn-short" onClick={() => filterSelection('English')}> English</button>
            </div >
        </>
    )
}