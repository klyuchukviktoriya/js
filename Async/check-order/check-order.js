async function checkOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (order.paid) {
        resolve(`Заказ ${order.id} оплачен`);
      } else {
        reject(new Error(`Заказ ${order.id} не оплачен`));
      }
    }, 1000)
  })
}

async function showOrderStatus(order) {
  try {
    const res = await checkOrder(order);
    console.log(res);
  } catch (error) {
    console.error(error.message);
  }
}

const order1 = { id: 15, paid: true };
const order2 = { id: 20, paid: false };

showOrderStatus(order1);
// Заказ 15 оплачен

showOrderStatus(order2);
// Заказ 20 не оплачен