import { faAddressBook, faBalanceScale, faBarcode, faCar, faCreditCard, faFileInvoice, faHeart, faHome, faMoneyBill, faMoneyBill1Wave, faPercent, faShuffle, faStar, faTruck, faUsd, faUser, faUserLock, faVcard, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import AppStrings from './../config/appStrings';
import { useTranslation } from 'react-i18next';


export const routes = {
    product: {
        list: '/products/list',
        add: '/products/add',
        edit: '/products/edit',
        compositeComponents: '/products/composite-components',
        compositeComponentsAdd: '/products/composite-components/add',
        pricesAndCosts: '/products/prices-and-costs'
    },
    branch: {
        list: '/branches/list',
        add: '/branches/add',
        edit: '/branches/edit'
    },
    category: {
        list: '/categories/list',
        add: '/categories/add',
        edit: '/categories/edit'
    },
    unit: {
        list: '/units/list',
        add: '/units/add',
        edit: '/units/edit'
    },
    flavor: {
        list: '/flavors/list',
        add: '/flavors/add',
        edit: '/flavors/edit'
    },
    offer: {
        list: '/offers/list',
        add: '/offers/add',
        edit: '/offers/edit'
    },
    discountType: {
        list: '/discount-types/list',
        add: '/discount-types/add',
        edit: '/discount-types/edit'
    },
    tax: {
        list: '/taxes/list',
        add: '/taxes/add',
        edit: '/taxes/edit'
    },
    currency: {
        list: '/currencies/list',
        add: '/currencies/add',
        edit: '/currencies/edit'
    },
    paymentMethod: {
        list: '/payment-methods/list',
        add: '/payment-methods/add',
        edit: '/payment-methods/edit'
    },
    supplier: {
        list: '/suppliers/list',
        add: '/suppliers/add',
        edit: '/suppliers/edit'
    },
    delivery_company: {
        list: '/delivery/companies/list',
        add: '/delivery/companies/add',
        edit: '/delivery/companies/edit'
    },
    delivery_discount: {
        list: '/delivery/discounts/list',
        add: '/delivery/discounts/add',
        edit: '/delivery/discounts/edit'
    },
    user_group: {
        list: '/user-management/groups/list',
        add: '/user-management/groups/add',
        edit: '/user-management/groups/edit'
    },
    user: {
        list: '/user-management/users/list',
        add: '/user-management/users/add',
        edit: '/user-management/users/edit'
    },
    permission: {
        list: '/user-management/permissions/list',
        edit: '/user-management/permissions/edit'
    },
    invoice: {
        list: '/purchases/invoices/list',
        add: '/purchases/invoices/add',
        edit: '/purchases/invoices/edit'
    },
    input_voucher: {
        list: '/purchases/input-vouchers/list',
        add: '/purchases/input-vouchers/add',
        edit: '/purchases/input-vouchers/edit'
    },
    output_voucher: {
        list: '/purchases/output-vouchers/list',
        add: '/purchases/output-vouchers/add',
        edit: '/purchases/output-vouchers/edit'
    },
    transfer_voucher: {
        list: '/purchases/transfer-vouchers/list',
        add: '/purchases/transfer-vouchers/add',
        edit: '/purchases/transfer-vouchers/edit'
    }
}



export const longCacheTime = 3500;
export const shortCacheTime = 1000;


export const menuList = [
    {
        label: AppStrings.home,
        subList: [
            {
                label: AppStrings.home,
                icon: faHome,
                type: 'unExpanded',
                href: '/'
            }
        ]
    },
    {
        label: AppStrings.main_menu,
        subList: [
            {
                label: AppStrings.branches,
                icon: faShuffle,
                subActions: [
                    { label: AppStrings.list, href: routes.branch.list },
                    { label: AppStrings.add, href: routes.branch.add }
                ]
            },
            {
                label: AppStrings.categories,
                icon: faWindowRestore,
                subActions: [
                    { label: AppStrings.list, href: routes.category.list },
                    { label: AppStrings.add, href: routes.category.add },
                ]
            },
            {
                label: AppStrings.units_of_measurement,
                icon: faBalanceScale,
                subActions: [
                    { label: AppStrings.list, href: routes.unit.list },
                    { label: AppStrings.add, href: routes.unit.add },

                ]
            },
            {
                label: AppStrings.flavors,
                icon: faHeart,
                subActions: [
                    { label: AppStrings.list, href: routes.flavor.list },
                    { label: AppStrings.add, href: routes.flavor.add }
                ]
            },
            {
                label: AppStrings.offers,
                icon: faStar,
                subActions: [
                    { label: AppStrings.list, href: routes.offer.list },
                    { label: AppStrings.add, href: routes.offer.add },
                ]
            },
            {
                label: AppStrings.discount_types,
                icon: faPercent,
                subActions: [
                    { label: AppStrings.list, href: routes.discountType.list },
                    { label: AppStrings.add, href: routes.discountType.add },

                ]
            },
            {
                label: AppStrings.taxes,
                icon: faUsd,
                subActions: [
                    { label: AppStrings.list, href: routes.tax.list },
                    { label: AppStrings.add, href: routes.tax.add },

                ]
            },
            {
                label: AppStrings.currencies,
                icon: faMoneyBill,
                subActions: [
                    { label: AppStrings.list, href: routes.currency.list },
                    { label: AppStrings.add, href: routes.currency.add },

                ]
            },
            {
                label: AppStrings.payment_methods,
                icon: faCreditCard,
                subActions: [
                    { label: AppStrings.list, href: routes.paymentMethod.list },
                    { label: AppStrings.add, href: routes.paymentMethod.add },

                ]
            },
            {
                label: AppStrings.suppliers,
                icon: faVcard,
                subActions: [
                    { label: AppStrings.list, href: routes.supplier.list },
                    { label: AppStrings.add, href: routes.supplier.add },

                ]
            }
        ]
    },
    {
        label: AppStrings.materials,
        subList: [
            {
                label: AppStrings.materials,
                icon: faBarcode,

                subActions: [
                    { label: AppStrings.list, href: routes.product.list, subHref: routes.product.edit },
                    { label: AppStrings.add, href: routes.product.add },
                ]
            },
            {
                label: AppStrings.assembled_material_components,
                icon: faBarcode,
                href: routes.product.compositeComponents,
                subHref: routes.product.compositeComponentsAdd,
                type: 'unExpanded',
            },
            {
                label: AppStrings.prices_and_costs,
                icon: faMoneyBill1Wave,
                type: 'unExpanded',
                href: routes.product.pricesAndCosts
            }
        ]
    },
    {
        label: AppStrings.purchases_and_warehouses,
        subList: [
            {
                label: AppStrings.purchase_invoices,
                icon: faFileInvoice,

                subActions: [{ label: AppStrings.list, href: routes.invoice.list },
                { label: AppStrings.add, href: routes.invoice.add },

                ]
            },
            {
                label: AppStrings.input_vouchers,
                icon: faTruck,

                subActions: [{ label: AppStrings.list, href: routes.input_voucher.list },
                { label: AppStrings.add, href: routes.input_voucher.add },

                ]
            },
            {
                label: AppStrings.output_vouchers,
                icon: faTruck,

                subActions: [{ label: AppStrings.list, href: routes.output_voucher.list },
                { label: AppStrings.add, href: routes.output_voucher.add },

                ]
            },
            {
                label: AppStrings.transfer_vouchers,
                icon: faTruck,

                subActions: [
                    { label: AppStrings.list, href: routes.transfer_voucher.list },
                    { label: AppStrings.add, href: routes.transfer_voucher.add },

                ]
            }
        ]
    },
    {
        label: AppStrings.delivery_companies,
        subList: [
            {
                label: AppStrings.define_companies,
                icon: faCar,

                subActions: [{ label: AppStrings.list, href: routes.delivery_company.list },
                { label: AppStrings.add, href: routes.delivery_company.add },

                ]
            },
            {
                label: AppStrings.delivery_discounts,
                icon: faCar,

                subActions: [
                    { label: AppStrings.list, href: routes.delivery_discount.list },
                    { label: AppStrings.add, href: routes.delivery_discount.add },

                ]
            }
        ]
    },
    {
        label: AppStrings.user_management,
        subList: [
            {
                label: AppStrings.user_groups,
                icon: faAddressBook,

                subActions: [
                    { label: AppStrings.list, href: routes.user_group.list },
                    { label: AppStrings.add, href: routes.user_group.add },

                ]
            },
            {
                label: AppStrings.users,
                icon: faUser,

                subActions: [
                    { label: AppStrings.list, href: routes.user.list },
                    { label: AppStrings.add, href: routes.user.add },

                ]
            },
            {
                label: AppStrings.user_permissions,
                icon: faUserLock,
                type: 'unExpanded',
                href: routes.permission.list
            }
        ]
    }
];


export const defaultProductValues = {
    Raw: {
        Discountable: true,
        IsService: false,
        IsActive: true,
        Saleable: false,
        Taxable: true,
        Icon: 'لا يوجد صورة'
    },
    Composite: {
        Discountable: true,
        IsService: false,
        IsActive: true,
        Saleable: true,
        Taxable: true,
        Icon: 'لا يوجد صورة'
    }

}

export const useDefaultPriceCategory = () => {
    const { t } = useTranslation()
    return (
        [
            {
                label: t(AppStrings.price1),
                value: 1
            },
            {
                label: t(AppStrings.price2),
                value: 2
            },
            {
                label: t(AppStrings.price3),
                value: 3
            },
            {
                label: t(AppStrings.price4),
                value: 4
            }
        ]
    )
}


export const permissionsDefaultValues = {
    "0101": false,
    "0102": false,
    "0103": false,
    "0104": false,
    "0105": false,
    "0106": false,
    "0107": false,
    "0108": false,
    "0109": false,
    "0110": false,
    "0111": false,
    "0112": false,
    "0113": false,
    "0114": false,
    "0115": false,
    "0116": false,
    "0117": false,
    "0118": false,
    "0119": false,
    "0120": false,
    "0121": false,
    "0122": false,
    "0123": false,
}
















