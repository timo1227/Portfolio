"use client"
import React from "react";
import useSWR from "swr";
import { CCard, CCardBody, CCardHeader, CButton, CCol, CRow } from "@coreui/react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Repo() {
    const { data, error } = useSWR("/api/getRepo", fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>Loading...</div>;

    console.log(data);
    return (
        <div className="flex flex-wrap min-w-fit ">
            <h2 className="text-4xl text-center w-full mt-7">My Projects</h2>
            <ul className="flex flex-wrap justify-center px-20 gap-10">
                {
                    data.map((repo: any) => {
                        if (repo.name === "timo1227" || repo.name === "data-mining") {
                            return null;
                        }
                        return (
                            <li key={repo.id}>
                                <CCard className="my-10 max-w-xl min-w-450">
                                    <CCardHeader>
                                        <h3 className="font-Burtons">{repo.name}</h3>
                                    </CCardHeader>
                                    <CCardBody>
                                        <CRow>
                                            <CCol>
                                                <p>{repo.description}</p>
                                            </CCol>
                                            <CCol className="flex justify-center items-center">
                                                <CButton
                                                    href={repo.html_url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    color="primary"
                                                    className="bg-indigo-600 hover:bg-indigo-800 hover:text-black "
                                                >
                                                    Visit Repo
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                    </CCardBody>
                                </CCard>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
