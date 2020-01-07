--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.19
-- Dumped by pg_dump version 9.5.19

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: pictures; Type: TABLE; Schema: public; Owner: mesprochainesvacances
--

CREATE TABLE public.pictures (
    id integer NOT NULL,
    name text,
    places_id integer,
    created_at date DEFAULT now() NOT NULL,
    updated_at date DEFAULT now()
);


ALTER TABLE public.pictures OWNER TO mesprochainesvacances;

--
-- Name: pictures_id_seq; Type: SEQUENCE; Schema: public; Owner: mesprochainesvacances
--

CREATE SEQUENCE public.pictures_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pictures_id_seq OWNER TO mesprochainesvacances;

--
-- Name: pictures_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mesprochainesvacances
--

ALTER SEQUENCE public.pictures_id_seq OWNED BY public.pictures.id;


--
-- Name: places; Type: TABLE; Schema: public; Owner: mesprochainesvacances
--

CREATE TABLE public.places (
    id integer NOT NULL,
    name character varying(255),
    created_at date DEFAULT now() NOT NULL,
    updated_at date DEFAULT now()
);


ALTER TABLE public.places OWNER TO mesprochainesvacances;

--
-- Name: places_id_seq; Type: SEQUENCE; Schema: public; Owner: mesprochainesvacances
--

CREATE SEQUENCE public.places_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.places_id_seq OWNER TO mesprochainesvacances;

--
-- Name: places_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mesprochainesvacances
--

ALTER SEQUENCE public.places_id_seq OWNED BY public.places.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: mesprochainesvacances
--

CREATE TABLE public.users (
    id integer NOT NULL,
    firstname character varying(33) NOT NULL,
    travelling_date date,
    places_id integer,
    created_at date DEFAULT now() NOT NULL,
    updated_at date DEFAULT now()
);


ALTER TABLE public.users OWNER TO mesprochainesvacances;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: mesprochainesvacances
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO mesprochainesvacances;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mesprochainesvacances
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: mesprochainesvacances
--

ALTER TABLE ONLY public.pictures ALTER COLUMN id SET DEFAULT nextval('public.pictures_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: mesprochainesvacances
--

ALTER TABLE ONLY public.places ALTER COLUMN id SET DEFAULT nextval('public.places_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: mesprochainesvacances
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: pictures; Type: TABLE DATA; Schema: public; Owner: mesprochainesvacances
--

COPY public.pictures (id, name, places_id, created_at, updated_at) FROM stdin;
\.


--
-- Name: pictures_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mesprochainesvacances
--

SELECT pg_catalog.setval('public.pictures_id_seq', 1, false);


--
-- Data for Name: places; Type: TABLE DATA; Schema: public; Owner: mesprochainesvacances
--

COPY public.places (id, name, created_at, updated_at) FROM stdin;
1	Kinshasa	2019-11-27	\N
2	Athènes	2019-11-27	\N
\.


--
-- Name: places_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mesprochainesvacances
--

SELECT pg_catalog.setval('public.places_id_seq', 1, false);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: mesprochainesvacances
--

COPY public.users (id, firstname, travelling_date, places_id, created_at, updated_at) FROM stdin;
11	Abi	2020-05-02	1	2019-11-28	2019-11-28
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mesprochainesvacances
--

SELECT pg_catalog.setval('public.users_id_seq', 11, true);


--
-- Name: pictures_pkey; Type: CONSTRAINT; Schema: public; Owner: mesprochainesvacances
--

ALTER TABLE ONLY public.pictures
    ADD CONSTRAINT pictures_pkey PRIMARY KEY (id);


--
-- Name: places_pkey; Type: CONSTRAINT; Schema: public; Owner: mesprochainesvacances
--

ALTER TABLE ONLY public.places
    ADD CONSTRAINT places_pkey PRIMARY KEY (id);


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: mesprochainesvacances
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: places_id; Type: FK CONSTRAINT; Schema: public; Owner: mesprochainesvacances
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT places_id FOREIGN KEY (places_id) REFERENCES public.places(id) NOT VALID;


--
-- Name: places_id; Type: FK CONSTRAINT; Schema: public; Owner: mesprochainesvacances
--

ALTER TABLE ONLY public.pictures
    ADD CONSTRAINT places_id FOREIGN KEY (places_id) REFERENCES public.places(id) NOT VALID;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

