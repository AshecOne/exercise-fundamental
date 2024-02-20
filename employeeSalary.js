class Employee {
    constructor(name, birth, gender, position) {
        this.name = name;
        this.age = new Date().getFullYear() - new Date(birth).getFullYear();
        this.gender = gender;
        this.position = position;
        this.totalSalary = 0;
        this.working = {};
    }

    calculateTotalSalary() {
        return {
            name: this.name,
            age: this.age,
            gender: this.gender,
            position: this.position,
            totalSalary: this.totalSalary.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR"
            }),
        };
    }
}

class FullTimeEmployee extends Employee {
    addWorkingHours(startHour, endHour) {
        const hoursWorked = parseInt(endHour) - parseInt(startHour);
        const normalRate = 100000;
        const overtimeRate = 75000;
        let dailySalary;
        
        if (hoursWorked > 6) {
            dailySalary = (6 * normalRate) + ((hoursWorked - 6) * overtimeRate);
        } else {
            dailySalary = hoursWorked * normalRate;
        }
        
        this.totalSalary += dailySalary;
        this.working = {
            name: this.name,
            position: this.position,
            dailyWorkHour: `${hoursWorked} jam`,
            dailySalary: dailySalary.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR"
            }),
        };
    }
}

class PartTimeEmployee extends Employee {
    addWorkingHours(startHour, endHour) {
        const hoursWorked = parseInt(endHour) - parseInt(startHour);
        const normalRate = 50000;
        const overtimeRate = 35000;
        let dailySalary;

        if (hoursWorked > 6) {
            dailySalary = (6 * normalRate) + ((hoursWorked - 6) * overtimeRate);
        } else {
            dailySalary = hoursWorked * normalRate;
        }
    
        this.totalSalary += dailySalary;
        this.working = {
            name: this.name,
            position: this.position,
            dailyWorkHour: `${hoursWorked} jam`,
            dailySalary: dailySalary.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR"
            }),
        };
    }
}

const partTimeEmployee = new PartTimeEmployee("Matthew", "1991-11-12", "MALE", "Secretary");
const fullTimeEmployee = new FullTimeEmployee("Nida", "1990-11-11", "FEMALE", "Manager");

partTimeEmployee.addWorkingHours("09.00", "16.00");
console.log(partTimeEmployee.working);
partTimeEmployee.addWorkingHours("09.00", "17.00");
console.log(partTimeEmployee.working);
console.log(partTimeEmployee.calculateTotalSalary());

fullTimeEmployee.addWorkingHours("09.00", "16.00");
console.log(fullTimeEmployee.working);
fullTimeEmployee.addWorkingHours("08.00", "18.00");
console.log(fullTimeEmployee.working);
console.log(fullTimeEmployee.calculateTotalSalary());
