import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Index";
import "./index.css";

const rootElement = document.getElementById("root");

rootElement &&
	createRoot(rootElement).render(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>,
	);
