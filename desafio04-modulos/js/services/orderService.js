import * as shippingService from './shippingService.js';

export function total(order) {
    const value = order.basic - (order.basic * order.discount / 100)

    const shipping = shippingService.shipment(order);

    return value + shipping;
}