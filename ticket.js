class Ticket {
  flights = [];
  co2_emissions;

  constructor(params) {
    const { route, type, departureDate, backDate } = params;
    const flightData = ROUTES.find(item => item.value === route);

    this.makeFlights(flightData.flights[0], departureDate)
    if (type === "round") {
      this.makeFlights(flightData.flights[1], backDate)
    }
    this.co2_emissions = flightData.co2_emissions;
  }

  makeFlights(flightData, departureDate) {
    let dDatetime, aDatetime;
    flightData.forEach((flight, index) => {
      let crossDay = false;
      if (index === 0) {
        dDatetime = dayjs.tz(`${departureDate} ${flight.departureTime}`, flight.departureTimeZone)
      } else {
        dDatetime = dayjs.tz(`${aDatetime.format("YYYY-MM-DD")} ${flight.departureTime}`, flight.departureTimeZone)
        if (dayjs(flight.departureTime).isBefore(dayjs(aDatetime.format("HH:mm")))) {
          dDatetime = dDatetime.add(1, "day")
        }
      }
      aDatetime = dDatetime.add(flight.duration, "minute").tz(flight.arrivalTimeZone)
      if (dayjs(aDatetime.format("YYYY-MM-DD")).isAfter(dDatetime.format("YYYY-MM-DD"))) {
        crossDay = true;
      }
      this.flights.push({
        ...flight,
        date: dDatetime,
        departureDateTime: dDatetime,
        arrivalDateTime: aDatetime,
        durationFormatted: dayjs.duration(flight.duration, "minutes").format("HH:mm"),
        crossDay,
      })
    })
  }
}
