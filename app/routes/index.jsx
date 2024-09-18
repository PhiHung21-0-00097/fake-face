import Login from "../components/layout/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const RootRouter = () => {
  const nonAuth = [
    {
      path: "/",
      element: <Login />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
      ],
    },
  ];

  //   const auth = [
  //     {
  //       path: 'summarize',
  //       element: <CartLayout />,
  //       children: [
  //         {
  //           path: '',
  //           element: <SummarizeProduct />,
  //           children: [
  //             {
  //               path: 'vps',
  //               element: <SummarizeVps />
  //             },
  //             {
  //               path: 'hosting',
  //               element: <SummarizeHosting />
  //             },
  //             {
  //               path: 'domain',
  //               element: <SummarizeDomain />
  //             },
  //             {
  //               path: 'ssl',
  //               element: <SummarizeSSL />
  //             },
  //             {
  //               path: 'licenses',
  //               element: <SummarizeLicenses />
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       path: '',
  //       element: <MainLayout />,
  //       children: [
  //         {
  //           path: '',
  //           element: <ProtectedRoute allowedRoles={[RoleEnum.CUSTOMER]} />,
  //           children: [
  //             {
  //               path: '/',
  //               element: <Dashboard />
  //             },
  //             {
  //               path: 'services',
  //               element: <Services />,
  //               children: [
  //                 {
  //                   path: 'domain',
  //                   element: <DomainService />,
  //                   children: [
  //                     {
  //                       path: '',
  //                       element: <RegisterDomain />
  //                     }
  //                   ]
  //                 },
  //                 {
  //                   path: 'vps',
  //                   element: <Vps />
  //                 },
  //                 {
  //                   path: 'hosting',
  //                   element: <Hosting />
  //                 },
  //                 {
  //                   path: 'custom-cloud-vps',
  //                   element: <CustomCloudVPS />
  //                 },
  //                 {
  //                   path: 'cloud-international',
  //                   element: <CloudInternational />
  //                 },
  //                 {
  //                   path: 'server',
  //                   element: <PhysicalServerPage />
  //                 },
  //                 {
  //                   path: 'digital-ocean',
  //                   element: <DigitalOcean />
  //                 },
  //                 {
  //                   path: 'organization-email',
  //                   element: <BusinessEmailPage />
  //                 },
  //                 {
  //                   path: 'firewall',
  //                   element: <FirewallPage />
  //                 },
  //                 {
  //                   path: 'ssl',
  //                   element: <SSLCertificate />
  //                 },
  //                 {
  //                   path: 'licenses',
  //                   element: <Licenses />
  //                 }
  //               ]
  //             },
  //             {
  //               path: 'my-services',
  //               element: <MyService />
  //             },
  //             {
  //               path: '/services-vn/detail/:id',
  //               element: <CloudVnDetailPage />
  //             },
  //             {
  //               path: '/my-services/invoice/:id',
  //               element: <InvoiceVPS />
  //             },
  //             {
  //               path: '/services/manage-domain',
  //               element: <AccountInfo />
  //             },
  //             {
  //               path: '/services/my-services',
  //               element: <AccountInfo />
  //             },
  //             {
  //               path: '/account/account-info',
  //               element: <AccountInfo />
  //             },
  //             {
  //               path: '/account/invoices',
  //               element: <AccountInfo />
  //             },
  //             {
  //               path: '/account/theme-plugin',
  //               element: <AccountInfo />
  //             },
  //             {
  //               path: '/partner/partner-program',
  //               element: <AccountInfo />
  //             },
  //             {
  //               path: '/support/support-tickets',
  //               element: <Tickets />
  //             },
  //             {
  //               path: '/support/manager-tickets',
  //               element: <ManagerTicket />
  //             },
  //             {
  //               path: '/support/manager-tickets/:id',
  //               element: <DetailedTicket />
  //             },
  //             {
  //               path: '/support/support-tickets/new',
  //               element: <NewTicket />
  //             },
  //             {
  //               path: 'invoices',
  //               element: <Invoices />
  //             },
  //             {
  //               path: '/support/hotline',
  //               element: <AccountInfo />
  //             },
  //             {
  //               path: '/notifications',
  //               element: <NotificationManager />
  //             },
  //             {
  //               path: '/transaction-history',
  //               element: <TransactionHistoryManager />
  //             },
  //             {
  //               path: '*',
  //               element: <NotFound />
  //             }
  //           ]
  //         },
  //         {
  //           path: '',
  //           element: <ProtectedRoute allowedRoles={[RoleEnum.ADMIN]} />,
  //           children: [
  //             {
  //               path: '/users',
  //               element: <UserManager />
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       path: 'order',
  //       element: <MainLayout />,
  //       children: [
  //         {
  //           path: '',
  //           element: <Order />
  //         }
  //       ]
  //     },
  //     {
  //       path: 'add-funds',
  //       element: <MainLayout />,
  //       children: [
  //         {
  //           path: '',
  //           element: <AddFunds />
  //         }
  //       ]
  //     }
  //   ]
  const acceptRouter = isLoggedIn ? auth : nonAuth;
  const router = createBrowserRouter([...acceptRouter]);
  return <RouterProvider router={router} />;
};

export default RootRouter;
