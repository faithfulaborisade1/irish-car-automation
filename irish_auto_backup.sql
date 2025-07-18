--
-- PostgreSQL database dump
--

-- Dumped from database version 15.13
-- Dumped by pg_dump version 15.13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: admin
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO admin;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: admin
--

COMMENT ON SCHEMA public IS '';


--
-- Name: AlertFrequency; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public."AlertFrequency" AS ENUM (
    'INSTANT',
    'DAILY',
    'WEEKLY',
    'MONTHLY'
);


ALTER TYPE public."AlertFrequency" OWNER TO admin;

--
-- Name: BodyType; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public."BodyType" AS ENUM (
    'HATCHBACK',
    'SALOON',
    'ESTATE',
    'SUV',
    'COUPE',
    'CONVERTIBLE',
    'MPV',
    'VAN',
    'PICKUP',
    'OTHER'
);


ALTER TYPE public."BodyType" OWNER TO admin;

--
-- Name: CarCondition; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public."CarCondition" AS ENUM (
    'NEW',
    'USED',
    'CERTIFIED_PRE_OWNED'
);


ALTER TYPE public."CarCondition" OWNER TO admin;

--
-- Name: FuelType; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public."FuelType" AS ENUM (
    'PETROL',
    'DIESEL',
    'ELECTRIC',
    'HYBRID',
    'PLUGIN_HYBRID',
    'LPG',
    'CNG'
);


ALTER TYPE public."FuelType" OWNER TO admin;

--
-- Name: InquiryStatus; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public."InquiryStatus" AS ENUM (
    'NEW',
    'READ',
    'RESPONDED',
    'CLOSED'
);


ALTER TYPE public."InquiryStatus" OWNER TO admin;

--
-- Name: InquiryType; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public."InquiryType" AS ENUM (
    'GENERAL',
    'PRICE_NEGOTIATION',
    'VIEWING_REQUEST',
    'FINANCE_INQUIRY',
    'TRADE_IN'
);


ALTER TYPE public."InquiryType" OWNER TO admin;

--
-- Name: ListingStatus; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public."ListingStatus" AS ENUM (
    'ACTIVE',
    'SOLD',
    'PENDING',
    'EXPIRED',
    'DRAFT'
);


ALTER TYPE public."ListingStatus" OWNER TO admin;

--
-- Name: NotificationType; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public."NotificationType" AS ENUM (
    'CAR_LIKED',
    'PRICE_DROP',
    'CAR_SOLD',
    'INQUIRY_RECEIVED',
    'SYSTEM_UPDATE'
);


ALTER TYPE public."NotificationType" OWNER TO admin;

--
-- Name: SubscriptionType; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public."SubscriptionType" AS ENUM (
    'BASIC',
    'PREMIUM',
    'ENTERPRISE'
);


ALTER TYPE public."SubscriptionType" OWNER TO admin;

--
-- Name: TransmissionType; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public."TransmissionType" AS ENUM (
    'MANUAL',
    'AUTOMATIC',
    'SEMI_AUTOMATIC',
    'CVT'
);


ALTER TYPE public."TransmissionType" OWNER TO admin;

--
-- Name: UserRole; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public."UserRole" AS ENUM (
    'USER',
    'DEALER',
    'ADMIN'
);


ALTER TYPE public."UserRole" OWNER TO admin;

--
-- Name: UserStatus; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public."UserStatus" AS ENUM (
    'ACTIVE',
    'INACTIVE',
    'SUSPENDED',
    'PENDING_VERIFICATION'
);


ALTER TYPE public."UserStatus" OWNER TO admin;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO admin;

--
-- Name: accounts; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.accounts (
    id text NOT NULL,
    "userId" text NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    "providerAccountId" text NOT NULL,
    refresh_token text,
    access_token text,
    expires_at integer,
    token_type text,
    scope text,
    id_token text,
    session_state text
);


ALTER TABLE public.accounts OWNER TO admin;

--
-- Name: car_images; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.car_images (
    id text NOT NULL,
    "carId" text NOT NULL,
    "originalUrl" text NOT NULL,
    "thumbnailUrl" text NOT NULL,
    "mediumUrl" text NOT NULL,
    "largeUrl" text NOT NULL,
    "altText" text,
    "orderIndex" integer NOT NULL,
    "fileSize" integer,
    "uploadedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.car_images OWNER TO admin;

--
-- Name: car_inquiries; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.car_inquiries (
    id text NOT NULL,
    "carId" text NOT NULL,
    "buyerId" text NOT NULL,
    message text NOT NULL,
    "contactPhone" text,
    "inquiryType" public."InquiryType" DEFAULT 'GENERAL'::public."InquiryType" NOT NULL,
    status public."InquiryStatus" DEFAULT 'NEW'::public."InquiryStatus" NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "respondedAt" timestamp(3) without time zone,
    response text
);


ALTER TABLE public.car_inquiries OWNER TO admin;

--
-- Name: car_likes; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.car_likes (
    id text NOT NULL,
    "userId" text NOT NULL,
    "carId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.car_likes OWNER TO admin;

--
-- Name: cars; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.cars (
    id text NOT NULL,
    "userId" text NOT NULL,
    title text NOT NULL,
    make text NOT NULL,
    model text NOT NULL,
    year integer NOT NULL,
    price numeric(10,2) NOT NULL,
    currency text DEFAULT 'EUR'::text NOT NULL,
    mileage integer,
    "fuelType" public."FuelType",
    transmission public."TransmissionType",
    "engineSize" numeric(3,1),
    "bodyType" public."BodyType",
    doors integer,
    seats integer,
    color text,
    condition public."CarCondition" DEFAULT 'USED'::public."CarCondition" NOT NULL,
    "previousOwners" integer,
    "nctExpiry" timestamp(3) without time zone,
    "serviceHistory" boolean DEFAULT false NOT NULL,
    "accidentHistory" boolean DEFAULT false NOT NULL,
    description text,
    features jsonb,
    location jsonb,
    slug text NOT NULL,
    status public."ListingStatus" DEFAULT 'ACTIVE'::public."ListingStatus" NOT NULL,
    featured boolean DEFAULT false NOT NULL,
    "featuredUntil" timestamp(3) without time zone,
    "viewsCount" integer DEFAULT 0 NOT NULL,
    "inquiriesCount" integer DEFAULT 0 NOT NULL,
    "likesCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.cars OWNER TO admin;

--
-- Name: dealer_profiles; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.dealer_profiles (
    id text NOT NULL,
    "userId" text NOT NULL,
    "businessName" text NOT NULL,
    "businessRegistration" text,
    "vatNumber" text,
    description text,
    logo text,
    website text,
    "businessHours" jsonb,
    specialties jsonb,
    "subscriptionType" public."SubscriptionType" DEFAULT 'BASIC'::public."SubscriptionType" NOT NULL,
    "subscriptionExpires" timestamp(3) without time zone,
    verified boolean DEFAULT false NOT NULL,
    "verifiedAt" timestamp(3) without time zone,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.dealer_profiles OWNER TO admin;

--
-- Name: favorite_cars; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.favorite_cars (
    id text NOT NULL,
    "userId" text NOT NULL,
    "carId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.favorite_cars OWNER TO admin;

--
-- Name: notifications; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.notifications (
    id text NOT NULL,
    "userId" text NOT NULL,
    type public."NotificationType" NOT NULL,
    title text NOT NULL,
    message text NOT NULL,
    "carId" text,
    read boolean DEFAULT false NOT NULL,
    "actionUrl" text,
    metadata jsonb,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.notifications OWNER TO admin;

--
-- Name: price_history; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.price_history (
    id text NOT NULL,
    "carId" text NOT NULL,
    "oldPrice" numeric(10,2) NOT NULL,
    "newPrice" numeric(10,2) NOT NULL,
    "changedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.price_history OWNER TO admin;

--
-- Name: saved_searches; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.saved_searches (
    id text NOT NULL,
    "userId" text NOT NULL,
    name text NOT NULL,
    "searchCriteria" jsonb NOT NULL,
    "emailAlerts" boolean DEFAULT true NOT NULL,
    "alertFrequency" public."AlertFrequency" DEFAULT 'DAILY'::public."AlertFrequency" NOT NULL,
    "lastNotified" timestamp(3) without time zone,
    "isActive" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.saved_searches OWNER TO admin;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.sessions (
    id text NOT NULL,
    "sessionToken" text NOT NULL,
    "userId" text NOT NULL,
    expires timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.sessions OWNER TO admin;

--
-- Name: users; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.users (
    id text NOT NULL,
    email text NOT NULL,
    name text,
    "firstName" text NOT NULL,
    "lastName" text NOT NULL,
    phone text,
    avatar text,
    role public."UserRole" DEFAULT 'USER'::public."UserRole" NOT NULL,
    status public."UserStatus" DEFAULT 'ACTIVE'::public."UserStatus" NOT NULL,
    password text,
    "emailVerified" timestamp(3) without time zone,
    bio text,
    location jsonb,
    preferences jsonb,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "lastLoginAt" timestamp(3) without time zone
);


ALTER TABLE public.users OWNER TO admin;

--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
98c368bd-4cbf-4e48-a36b-8e6c416aabd2	0dae80b0784abd970e05d6bb73ff1c73aad57829308d618035e0558535e2e098	2025-06-05 17:06:06.200926+00	20250605170606_add_like_system	\N	\N	2025-06-05 17:06:06.083563+00	1
\.


--
-- Data for Name: accounts; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.accounts (id, "userId", type, provider, "providerAccountId", refresh_token, access_token, expires_at, token_type, scope, id_token, session_state) FROM stdin;
\.


--
-- Data for Name: car_images; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.car_images (id, "carId", "originalUrl", "thumbnailUrl", "mediumUrl", "largeUrl", "altText", "orderIndex", "fileSize", "uploadedAt") FROM stdin;
cmbjpp7hy000h1463hfv4deq1	cmbjpp7hj000b1463dzo33fdy	https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop	https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200&h=150&fit=crop	https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop	https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop	BMW 3 Series front view	1	\N	2025-06-05 18:30:39.67
cmbjpp7i2000j14637bna6jvs	cmbjpp7hq000d1463mt4bg0vz	https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop	https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=200&h=150&fit=crop	https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop	https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop	VW Golf GTI front view	1	\N	2025-06-05 18:30:39.674
cmbjpp7i6000l1463giwga5ns	cmbjpp7ht000f1463zcvekao4	https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop	https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=200&h=150&fit=crop	https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop	https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop	Tesla Model 3 front view	1	\N	2025-06-05 18:30:39.678
\.


--
-- Data for Name: car_inquiries; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.car_inquiries (id, "carId", "buyerId", message, "contactPhone", "inquiryType", status, "createdAt", "respondedAt", response) FROM stdin;
\.


--
-- Data for Name: car_likes; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.car_likes (id, "userId", "carId", "createdAt") FROM stdin;
cmbjpp7ia000n1463kz287191	cmbjpp7h300041463hahyix6l	cmbjpp7hj000b1463dzo33fdy	2025-06-05 18:30:39.682
cmbjpp7ig000p1463upp6wjj1	cmbjpp7h600051463p89rwajq	cmbjpp7hq000d1463mt4bg0vz	2025-06-05 18:30:39.688
cmbjpp7ii000r14637bi0maqc	cmbjpp7h000031463nxzsni7o	cmbjpp7hq000d1463mt4bg0vz	2025-06-05 18:30:39.69
cmbjpp7in000t1463wqujmyjc	cmbjpp7h300041463hahyix6l	cmbjpp7ht000f1463zcvekao4	2025-06-05 18:30:39.696
cmbjqima8000430d9f0ffqpah	cmbjqcgto000130d9uu98fwno	cmbjpp7ht000f1463zcvekao4	2025-06-05 18:53:31.854
\.


--
-- Data for Name: cars; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.cars (id, "userId", title, make, model, year, price, currency, mileage, "fuelType", transmission, "engineSize", "bodyType", doors, seats, color, condition, "previousOwners", "nctExpiry", "serviceHistory", "accidentHistory", description, features, location, slug, status, featured, "featuredUntil", "viewsCount", "inquiriesCount", "likesCount", "createdAt", "updatedAt") FROM stdin;
cmbjpp7hj000b1463dzo33fdy	cmbjpp7gu00011463r4qi4blq	2020 BMW 3 Series 320d M Sport	BMW	3 Series	2020	32000.00	EUR	45000	DIESEL	AUTOMATIC	\N	SALOON	4	\N	Mineral Grey Metallic	USED	\N	2025-08-15 00:00:00	f	f	Stunning BMW 3 Series in excellent condition. Full service history, one previous owner. Features M Sport package with enhanced styling and performance.	["M Sport Package", "Navigation System", "Leather Seats", "Heated Seats", "Parking Sensors", "Bluetooth", "Cruise Control", "LED Headlights"]	{"city": "Dublin", "county": "Dublin", "postcode": "D04 V6K8"}	2020-bmw-3-series-320d-m-sport-1	ACTIVE	t	\N	234	12	15	2025-06-05 18:30:39.655	2025-06-05 18:30:39.655
cmbjpp7hq000d1463mt4bg0vz	cmbjpp7gx00021463xtyp2v06	2019 Volkswagen Golf GTI	Volkswagen	Golf	2019	28500.00	EUR	38000	PETROL	MANUAL	\N	HATCHBACK	5	\N	Tornado Red	USED	\N	2025-12-03 00:00:00	f	f	Iconic Golf GTI in pristine condition. This performance hatchback offers thrilling driving dynamics with everyday practicality.	["GTI Performance Package", "Sports Suspension", "Touchscreen Infotainment", "Apple CarPlay", "Sports Seats", "Dual-Zone Climate", "Parking Assistance", "LED Lights"]	{"city": "Cork", "county": "Cork", "postcode": "T12 R6K9"}	2019-volkswagen-golf-gti-2	ACTIVE	f	\N	156	8	23	2025-06-05 18:30:39.662	2025-06-05 18:30:39.662
cmbjpp7ht000f1463zcvekao4	cmbjpp7h000031463nxzsni7o	2021 Tesla Model 3 Long Range	Tesla	Model 3	2021	45000.00	EUR	25000	ELECTRIC	AUTOMATIC	\N	SALOON	4	\N	Pearl White Multi-Coat	USED	\N	\N	f	f	Immaculate Tesla Model 3 Long Range with Autopilot. Zero emissions driving with incredible performance.	["Autopilot", "Supercharging Capability", "15-inch Touchscreen", "Premium Audio", "Glass Roof", "Heated Seats", "Over-the-Air Updates", "Mobile App Control"]	{"city": "Galway", "county": "Galway", "postcode": "H91 X4F2"}	2021-tesla-model-3-long-range-3	ACTIVE	t	\N	445	23	9	2025-06-05 18:30:39.666	2025-06-05 18:53:31.861
\.


--
-- Data for Name: dealer_profiles; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.dealer_profiles (id, "userId", "businessName", "businessRegistration", "vatNumber", description, logo, website, "businessHours", specialties, "subscriptionType", "subscriptionExpires", verified, "verifiedAt", "createdAt", "updatedAt") FROM stdin;
cmbjpp7hb00071463ukjblyy8	cmbjpp7gu00011463r4qi4blq	Premium Motors Dublin	\N	\N	Specializing in premium German vehicles with full service history.	\N	https://premiummotors.ie	\N	["BMW", "Audi", "Mercedes-Benz"]	PREMIUM	\N	t	2025-06-05 18:30:39.644	2025-06-05 18:30:39.647	2025-06-05 18:30:39.647
cmbjpp7hf00091463j3wh8w3u	cmbjpp7gx00021463xtyp2v06	Cork Auto Center	\N	\N	Family-run dealership serving Cork for over 20 years.	\N	https://corkauto.ie	\N	["Volkswagen", "Ford", "Toyota"]	BASIC	\N	t	2025-06-05 18:30:39.65	2025-06-05 18:30:39.652	2025-06-05 18:30:39.652
\.


--
-- Data for Name: favorite_cars; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.favorite_cars (id, "userId", "carId", "createdAt") FROM stdin;
\.


--
-- Data for Name: notifications; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.notifications (id, "userId", type, title, message, "carId", read, "actionUrl", metadata, "createdAt") FROM stdin;
cmbjpp7is000v1463fn3ho6xn	cmbjpp7gu00011463r4qi4blq	CAR_LIKED	Someone liked your car!	Sarah Murphy liked your BMW 3 Series	cmbjpp7hj000b1463dzo33fdy	f	/cars/cmbjpp7hj000b1463dzo33fdy	{"likerName": "Sarah Murphy", "likerEmail": "sarah@email.com"}	2025-06-05 18:30:39.701
cmbjpp7iz000x1463rd9lkwnd	cmbjpp7gx00021463xtyp2v06	CAR_LIKED	Someone liked your car!	Test User liked your Volkswagen Golf	cmbjpp7hq000d1463mt4bg0vz	f	/cars/cmbjpp7hq000d1463mt4bg0vz	{"likerName": "Test User", "likerEmail": "test@irishautomarket.ie"}	2025-06-05 18:30:39.708
cmbjqimak000630d9lap76prg	cmbjpp7h000031463nxzsni7o	CAR_LIKED	Someone liked your car!	John Sell liked your Tesla Model 3	cmbjpp7ht000f1463zcvekao4	f	/cars/cmbjpp7ht000f1463zcvekao4	{"likerName": "John Sell", "likerEmail": "johnsell@gmail.com"}	2025-06-05 18:53:31.868
\.


--
-- Data for Name: price_history; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.price_history (id, "carId", "oldPrice", "newPrice", "changedAt") FROM stdin;
cmbjpp7j4000z1463tfprtccu	cmbjpp7hj000b1463dzo33fdy	35000.00	32000.00	2025-05-29 18:30:39.71
cmbjpp7jb00111463obqfl43x	cmbjpp7ht000f1463zcvekao4	42000.00	45000.00	2025-06-02 18:30:39.717
\.


--
-- Data for Name: saved_searches; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.saved_searches (id, "userId", name, "searchCriteria", "emailAlerts", "alertFrequency", "lastNotified", "isActive", "createdAt") FROM stdin;
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.sessions (id, "sessionToken", "userId", expires) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.users (id, email, name, "firstName", "lastName", phone, avatar, role, status, password, "emailVerified", bio, location, preferences, "createdAt", "updatedAt", "lastLoginAt") FROM stdin;
cmbjpp7gi000014639jvs3lm6	admin@irishautomarket.ie	\N	Admin	User	+353 1 234 5678	\N	ADMIN	ACTIVE	\N	\N	\N	{"city": "Dublin", "county": "Dublin"}	\N	2025-06-05 18:30:39.618	2025-06-05 18:30:39.618	\N
cmbjpp7gu00011463r4qi4blq	dealer@premiummotors.ie	\N	John	Premium	+353 1 555 0001	\N	DEALER	ACTIVE	\N	\N	\N	{"city": "Dublin 4", "county": "Dublin"}	\N	2025-06-05 18:30:39.63	2025-06-05 18:30:39.63	\N
cmbjpp7gx00021463xtyp2v06	sales@corkauto.ie	\N	Mary	Cork	+353 21 555 0002	\N	DEALER	ACTIVE	\N	\N	\N	{"city": "Cork", "county": "Cork"}	\N	2025-06-05 18:30:39.633	2025-06-05 18:30:39.633	\N
cmbjpp7h000031463nxzsni7o	michael@email.com	\N	Michael	O'Sullivan	+353 87 123 4567	\N	USER	ACTIVE	\N	\N	\N	{"city": "Galway", "county": "Galway"}	\N	2025-06-05 18:30:39.636	2025-06-05 18:30:39.636	\N
cmbjpp7h300041463hahyix6l	sarah@email.com	\N	Sarah	Murphy	+353 86 987 6543	\N	USER	ACTIVE	\N	\N	\N	{"city": "Dublin 2", "county": "Dublin"}	\N	2025-06-05 18:30:39.639	2025-06-05 18:30:39.639	\N
cmbjpp7h600051463p89rwajq	test@irishautomarket.ie	\N	Test	User	+353 87 000 0000	\N	USER	ACTIVE	$2b$10$rV8O8m8l7n6jrYqL1VzKJ.oJ8L3m5n9p7q1s3t5u7v9w1x3y5z7A9B	\N	\N	{"city": "Dublin", "county": "Dublin"}	\N	2025-06-05 18:30:39.642	2025-06-05 18:30:39.642	\N
cmbjq79cc000030d9ggoe16zx	johnkim@gmail.com	\N	John	Kim	0870987653	\N	USER	ACTIVE	$2b$10$8fFNbin6msPzi8GsgHRhOO5/1G5IPsGS3IUYAbco6t8AlvpRXlKAu	\N	\N	\N	\N	2025-06-05 18:44:41.867	2025-06-05 18:44:54.085	2025-06-05 18:44:54.083
cmbjqcgto000130d9uu98fwno	johnsell@gmail.com	\N	John	Sell	098765653	\N	USER	ACTIVE	$2b$10$quCaTsih/Ps4fnK7PZuwH.WUw4vDiivK3zmYim3De3h8/Dhzq56vS	\N	\N	\N	\N	2025-06-05 18:48:44.844	2025-06-05 18:49:05.564	2025-06-05 18:49:05.562
\.


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: accounts accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);


--
-- Name: car_images car_images_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.car_images
    ADD CONSTRAINT car_images_pkey PRIMARY KEY (id);


--
-- Name: car_inquiries car_inquiries_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.car_inquiries
    ADD CONSTRAINT car_inquiries_pkey PRIMARY KEY (id);


--
-- Name: car_likes car_likes_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.car_likes
    ADD CONSTRAINT car_likes_pkey PRIMARY KEY (id);


--
-- Name: cars cars_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_pkey PRIMARY KEY (id);


--
-- Name: dealer_profiles dealer_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.dealer_profiles
    ADD CONSTRAINT dealer_profiles_pkey PRIMARY KEY (id);


--
-- Name: favorite_cars favorite_cars_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.favorite_cars
    ADD CONSTRAINT favorite_cars_pkey PRIMARY KEY (id);


--
-- Name: notifications notifications_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_pkey PRIMARY KEY (id);


--
-- Name: price_history price_history_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.price_history
    ADD CONSTRAINT price_history_pkey PRIMARY KEY (id);


--
-- Name: saved_searches saved_searches_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.saved_searches
    ADD CONSTRAINT saved_searches_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: accounts_provider_providerAccountId_key; Type: INDEX; Schema: public; Owner: admin
--

CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON public.accounts USING btree (provider, "providerAccountId");


--
-- Name: car_likes_userId_carId_key; Type: INDEX; Schema: public; Owner: admin
--

CREATE UNIQUE INDEX "car_likes_userId_carId_key" ON public.car_likes USING btree ("userId", "carId");


--
-- Name: cars_slug_key; Type: INDEX; Schema: public; Owner: admin
--

CREATE UNIQUE INDEX cars_slug_key ON public.cars USING btree (slug);


--
-- Name: dealer_profiles_userId_key; Type: INDEX; Schema: public; Owner: admin
--

CREATE UNIQUE INDEX "dealer_profiles_userId_key" ON public.dealer_profiles USING btree ("userId");


--
-- Name: favorite_cars_userId_carId_key; Type: INDEX; Schema: public; Owner: admin
--

CREATE UNIQUE INDEX "favorite_cars_userId_carId_key" ON public.favorite_cars USING btree ("userId", "carId");


--
-- Name: sessions_sessionToken_key; Type: INDEX; Schema: public; Owner: admin
--

CREATE UNIQUE INDEX "sessions_sessionToken_key" ON public.sessions USING btree ("sessionToken");


--
-- Name: users_email_key; Type: INDEX; Schema: public; Owner: admin
--

CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);


--
-- Name: accounts accounts_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: car_images car_images_carId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.car_images
    ADD CONSTRAINT "car_images_carId_fkey" FOREIGN KEY ("carId") REFERENCES public.cars(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: car_inquiries car_inquiries_buyerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.car_inquiries
    ADD CONSTRAINT "car_inquiries_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: car_inquiries car_inquiries_carId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.car_inquiries
    ADD CONSTRAINT "car_inquiries_carId_fkey" FOREIGN KEY ("carId") REFERENCES public.cars(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: car_likes car_likes_carId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.car_likes
    ADD CONSTRAINT "car_likes_carId_fkey" FOREIGN KEY ("carId") REFERENCES public.cars(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: car_likes car_likes_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.car_likes
    ADD CONSTRAINT "car_likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: cars cars_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT "cars_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: dealer_profiles dealer_profiles_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.dealer_profiles
    ADD CONSTRAINT "dealer_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: favorite_cars favorite_cars_carId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.favorite_cars
    ADD CONSTRAINT "favorite_cars_carId_fkey" FOREIGN KEY ("carId") REFERENCES public.cars(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: favorite_cars favorite_cars_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.favorite_cars
    ADD CONSTRAINT "favorite_cars_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: notifications notifications_carId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT "notifications_carId_fkey" FOREIGN KEY ("carId") REFERENCES public.cars(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: notifications notifications_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: price_history price_history_carId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.price_history
    ADD CONSTRAINT "price_history_carId_fkey" FOREIGN KEY ("carId") REFERENCES public.cars(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: saved_searches saved_searches_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.saved_searches
    ADD CONSTRAINT "saved_searches_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: admin
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

