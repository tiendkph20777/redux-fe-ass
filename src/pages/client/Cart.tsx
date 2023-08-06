import React from 'react';
import { Row, Col, Table, Button } from 'antd';
import { useFetchCartQuery, useRemoveCartMutation } from '../../services/cart.service';
import { ICart } from '../../models';
import { Link } from 'react-router-dom';
import 'antd/dist/reset.css'
const Cart = () => {
    const { data, isLoading } = useFetchCartQuery();
    const removeCartItem = useRemoveCartMutation();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleDeleteCartItem = (cartItemId: ICart) => {
        console.log(cartItemId);
        const confirm = window.confirm('Are you sure you want to delete this item?');
        if (!confirm) {
            console.log(cartItemId);
            // removeCartItem.mutate(cartItemId.key);
        }
    };

    // Define the columns for the table
    const columns = [
        {
            title: 'Action',
            key: 'action',
            render: (text: string, record: ICart) => (
                <Button onClick={() => handleDeleteCartItem(record)} type="primary" danger>
                    X
                </Button>
            ),
        },
        {
            title: 'Product Name',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            // render: (quantity: number, record: ICart) => (
            //     <input
            //         type="number"
            //         disabled
            //         min={1}
            //         value={quantity}
            //         onChange={(e) => handleQuantityChange(record, e.target.value)}
            //     />
            // ),
        },
        {
            title: 'Total Price',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
        },
    ];

    const tableData = data.map((item: ICart) => ({
        key: item.id,
        productName: item.products?.name,
        price: `${item.products?.price} VNĐ`,
        quantity: item.products?.quantity,
        totalPrice: item.products?.price * item.products?.quantity,
    }));

    // Tính tổng giá của các sản phẩm trong giỏ hàng
    const totalPrice = tableData.reduce((acc, item) => acc + (item.totalPrice || 0), 0);

    return (
        <div>
            <div className="products_main">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={24}>
                        <Table columns={columns} dataSource={tableData} />
                    </Col>
                </Row>
                <Col span={24} style={{ textAlign: 'right' }}>
                    <strong>Total Price: {totalPrice} VNĐ</strong>
                    <Button type="primary">
                        Thanh Toán
                    </Button>
                </Col>
            </div>
        </div>
    );
};

export default Cart;
