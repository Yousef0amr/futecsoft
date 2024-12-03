import { faAddressBook, faBalanceScale, faBarcode, faCar, faCreditCard, faFileInvoice, faHeart, faHome, faMoneyBill, faMoneyBill1Wave, faPercent, faShuffle, faStar, faTruck, faUsd, faUser, faUserLock, faVcard, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import AppStrings from './../config/appStrings';


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

                subActions: [
                    { label: AppStrings.add, href: '/purchases/invoices/add' },
                    { label: AppStrings.list, href: '/purchases/invoices/list' }
                ]
            },
            {
                label: AppStrings.input_vouchers,
                icon: faTruck,

                subActions: [
                    { label: AppStrings.add, href: '/purchases/input-vouchers/add' },
                    { label: AppStrings.list, href: '/purchases/input-vouchers/list' }
                ]
            },
            {
                label: AppStrings.output_vouchers,
                icon: faTruck,

                subActions: [
                    { label: AppStrings.add, href: '/purchases/output-vouchers/add' },
                    { label: AppStrings.list, href: '/purchases/output-vouchers/list' }
                ]
            },
            {
                label: AppStrings.transfer_vouchers,
                icon: faTruck,

                subActions: [
                    { label: AppStrings.add, href: '/purchases/transfer-vouchers/add' },
                    { label: AppStrings.list, href: '/purchases/transfer-vouchers/list' }
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

                subActions: [
                    { label: AppStrings.add, href: '/delivery/companies/add' },
                    { label: AppStrings.list, href: '/delivery/companies/list' }
                ]
            },
            {
                label: AppStrings.delivery_discounts,
                icon: faCar,

                subActions: [
                    { label: AppStrings.add, href: '/delivery/discounts/add' },
                    { label: AppStrings.list, href: '/delivery/discounts/list' }
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
                    { label: AppStrings.add, href: '/user-management/groups/add' },
                    { label: AppStrings.list, href: '/user-management/groups/list' }
                ]
            },
            {
                label: AppStrings.users,
                icon: faUser,

                subActions: [
                    { label: AppStrings.add, href: '/user-management/users/add' },
                    { label: AppStrings.list, href: '/user-management/users/list' }
                ]
            },
            {
                label: AppStrings.user_permissions,
                icon: faUserLock,

                subActions: [
                    { label: AppStrings.add, href: '/user-management/permissions/add' },
                    { label: AppStrings.list, href: '/user-management/permissions/list' }
                ]
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
















