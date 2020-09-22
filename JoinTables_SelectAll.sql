USE bookingApp; 

SELECT appointmentID, customers.customerID, customers.company, customers.lastname, customers.firstname, customers.address, customers.city, customers.state, customers.zipcode, customers.phoneNumber, customers.emailAddress, service.serviceName, service.servicePrice, appointments.dateGenereated, appointments.dateReq, appointments.timeReq AS 'Time Slot', appointments.comments
FROM ((appointments
INNER JOIN customers ON customers.customerID = appointments.customerID)
INNER JOIN service ON service.serviceID = appointments.serviceID); 