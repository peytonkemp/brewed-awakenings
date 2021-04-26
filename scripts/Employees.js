import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if ( employee.id === parseInt(employeeId)) {
                    let salesArray = []

                    const employeeOrders = orders.filter(  // <--- Go to YouTube and search "javascript array filter"
                        (order) => {
                            if (order.employeeId === employee.id) {
                                salesArray.push(order.employeeId)
                            }
                        }
                    )

                    window.alert(` ${employee.name} sold ${salesArray.length} products `)
                }
            }
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

