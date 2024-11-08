import { faAddressBook, faBalanceScale, faBarcode, faCar, faCreditCard, faFileInvoice, faHeart, faMoneyBill, faMoneyBill1Wave, faPercent, faShuffle, faStar, faTruck, faUsd, faUser, faUserLock, faVcard, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import AppStrings from './appStrings';

export const menuList = [
    {
        label: AppStrings.main_menu,
        subList: [
            {
                label: AppStrings.branches,
                icon: faShuffle,
                subActions: [
                    { label: AppStrings.list, href: '/branches/list' },
                    { label: AppStrings.add, href: '/branches/add' }
                ]
            },
            {
                label: AppStrings.categories,
                icon: faWindowRestore,
                subActions: [
                    { label: AppStrings.add, href: '/categories/add' },
                    { label: AppStrings.list, href: '/categories/list' }
                ]
            },
            {
                label: AppStrings.units_of_measurement,
                icon: faBalanceScale,
                subActions: [
                    { label: AppStrings.add, href: '/units/add' },
                    { label: AppStrings.list, href: '/units/list' }
                ]
            },
            {
                label: AppStrings.flavors,
                icon: faHeart,
                subActions: [
                    { label: AppStrings.add, href: '/flavors/add' },
                    { label: AppStrings.list, href: '/flavors/list' }
                ]
            },
            {
                label: AppStrings.offers,
                icon: faStar,
                subActions: [
                    { label: AppStrings.add, href: '/offers/add' },
                    { label: AppStrings.list, href: '/offers/list' }
                ]
            },
            {
                label: AppStrings.discount_types,
                icon: faPercent,
                subActions: [
                    { label: AppStrings.add, href: '/discount-types/add' },
                    { label: AppStrings.list, href: '/discount-types/list' }
                ]
            },
            {
                label: AppStrings.taxes,
                icon: faUsd,
                subActions: [
                    { label: AppStrings.add, href: '/taxes/add' },
                    { label: AppStrings.list, href: '/taxes/list' }
                ]
            },
            {
                label: AppStrings.currencies,
                icon: faMoneyBill,
                subActions: [
                    { label: AppStrings.add, href: '/currencies/add' },
                    { label: AppStrings.list, href: '/currencies/list' }
                ]
            },
            {
                label: AppStrings.payment_methods,
                icon: faCreditCard,
                subActions: [
                    { label: AppStrings.add, href: '/payment-methods/add' },
                    { label: AppStrings.list, href: '/payment-methods/list' }
                ]
            },
            {
                label: AppStrings.suppliers,
                icon: faVcard,
                subActions: [
                    { label: AppStrings.add, href: '/suppliers/add' },
                    { label: AppStrings.list, href: '/suppliers/list' }
                ]
            }
        ]
    },
    {
        label: AppStrings.materials,
        subList: [
            {
                label: AppStrings.finished_materials,
                icon: faBarcode,

                subActions: [
                    { label: AppStrings.add, href: '/materials/finished/add' },
                    { label: AppStrings.list, href: '/materials/finished/list' }
                ]
            },
            {
                label: AppStrings.raw_materials,
                icon: faBarcode,

                subActions: [
                    { label: AppStrings.add, href: '/materials/raw/add' },
                    { label: AppStrings.list, href: '/materials/raw/list' }
                ]
            },
            {
                label: AppStrings.assembled_materials,
                icon: faBarcode,

                subActions: [
                    { label: AppStrings.add, href: '/materials/assembled/add' },
                    { label: AppStrings.list, href: '/materials/assembled/list' }
                ]
            },
            {
                label: AppStrings.assembled_material_components,
                icon: faBarcode,

                subActions: [
                    { label: AppStrings.add, href: '/materials/components/add' },
                    { label: AppStrings.list, href: '/materials/components/list' }
                ]
            },
            {
                label: AppStrings.prices_and_costs,
                icon: faMoneyBill1Wave,

                subActions: [
                    { label: AppStrings.add, href: '/materials/prices-costs/add' },
                    { label: AppStrings.list, href: '/materials/prices-costs/list' }
                ]
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
