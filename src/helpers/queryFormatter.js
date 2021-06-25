class QueryFormatter {
  constructor(query) {
    this.make = query.make;
    this.model = query.model;
    this.version = query.version;
    this.year = query.year;
    this.mileage = query.mileage;
    this.car_shift = query.car_shift;
    this.sale_price = query.sale_price;
    this.yearGte = query.yearGte;
    this.yearLte = query.yearLte;
    this.sale_priceGte = query.sale_priceGte;
    this.sale_priceLte = query.sale_priceLte;
  }

  returnAFormattedQuery() {
    const formattedQuery = {};

    Object.entries(this).forEach((value) => {
      switch (value[0]) {
        case 'yearGte':
          if (this.yearGte !== undefined) {
            formattedQuery.year = {
              $gte: this.yearGte,
            };
          }
          break;
        case 'yearLte':
          if (this.yearLte !== undefined) {
            formattedQuery.year = {
              ...formattedQuery.year, $lte: this.yearLte,
            };
          }
          break;
        case 'sale_priceGte':
          if (this.sale_priceGte !== undefined) {
            formattedQuery.sale_price = {
              $gte: this.sale_priceGte,
            };
          }
          break;
        case 'sale_priceLte':
          if (this.sale_priceLte !== undefined) {
            formattedQuery.sale_price = {
              ...formattedQuery.sale_price, $lte: this.sale_priceLte,
            };
          }
          break;
        default:
          if (value[1] !== undefined) formattedQuery[value[0]] = { $regex: value[1] };
          break;
      }
    });

    return formattedQuery;
  }
}

module.exports = QueryFormatter;
