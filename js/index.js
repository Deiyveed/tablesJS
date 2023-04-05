let date = new Date();

let splittedDate = date.toDateString();
let modifiedDate = date.toDateString() + " " + date.toLocaleTimeString()

const datas = [
    {   S_N: 1,
        email_address: "oladipupoolumide863gmail.com",
        role: "Chief Technology Officer",
        created_by: "Oladipupo Olumide",
        created_date: splittedDate,
        modified_by: "Oladipupo Olumide",
        modified_date: modifiedDate,
    },

    {   S_N: 2,
        email_address: "oladipupodeiyveed863@gmail.com",
        role: "Product Manager",
        created_by: "David Olumide",
        created_date: splittedDate,
        modified_by: "David Olumide",
        modified_date: modifiedDate,
    },

    {   S_N: 3,
        email_address: "matthewjayboy@gmail.com",
        role: "Senior Software Engineer",
        created_by: "Jayboy Matthew",
        created_date: splittedDate,
        modified_by: "Jayboy Matthew",
        modified_date: modifiedDate,
    },

    {   S_N: 4,
        email_address: "bankoleibukun@gmail.com",
        role: "Junior Software Developer",
        created_by: "Bankole Ibukun",
        created_date: splittedDate,
        modified_by: "Jayboy Matthew",
        modified_date: modifiedDate,
    },

    {   S_N: 5,
        email_address: "ademolaadebanjo@gmail.com",
        role: "Junior Software Developer",
        created_by: "Ademola Adebanjo",
        created_date: splittedDate,
        modified_by: "Ademola Adebanjo",
        modified_date: modifiedDate,
    },

    {   S_N: 6,
        email_address: "juwonalatishe@gmail.com",
        role: "DevOps",
        created_by: "Juwon Alatishe",
        created_date: splittedDate,
        modified_by: "Oladipupo Olumide",
        modified_date: modifiedDate,
    },

    {   S_N: 7,
        email_address: "alfamoshood@gmail.com",
        role: "Product Designer",
        created_by: "ALfa Moshood",
        created_date: splittedDate,
        modified_by: "Jayboy Matthew",
        modified_date: modifiedDate,
    },

    {   S_N: 8,
        email_address: "alhajarahmat@yahoo.com",
        role: "Communications Manager",
        created_by: "Alhaja Rahmat",
        created_date: splittedDate,
        modified_by: "Alhaja Rahmat",
        modified_date: modifiedDate,
    },

    {   S_N: 9,
        email_address: "mariambabatunde@hotmail.com",
        role: "Sofware Intern",
        created_by: "Babatunde Mariam",
        created_date: splittedDate,
        modified_by: "Bankole Ibukun",
        modified_date: modifiedDate,
    },

    {   S_N: 10,
        email_address: "sailtechtalent.co",
        role: "CEO",
        created_by: "Abiru Toks",
        created_date: splittedDate,
        modified_by: "Abiru Toks",
        modified_date: modifiedDate,
    },
];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key)
        th.appendChild(text);
        row.appendChild(th);
        th.style.border = "1px solid black"; 
        th.style.backgroundColor = "green"
        th.style.borderCollapse = "collapse"
    }
}

function generateTable(table, data) {
    for(let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
            cell.style.border = "1px solid black"
            cell.style.borderCollapse = "collapse"
            cell.style.backgroundColor = "crimson"
            cell.style.padding = "0.8rem"
        }
    }
}

let table = document.querySelector("table");
let data =  Object.keys(datas[0]);
console.log(table)
generateTable(table, datas);
generateTableHead(table, data);

table.style.border = "1px solid black"


