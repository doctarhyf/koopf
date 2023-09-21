import {
  Alert,
  Button,
  Drawer,
  IconButton,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";

import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

export default function Home({}) {
  return (
    <div className="">
      <div className="w-72">
        <Select label="Select Version">
          <Option>
            {" "}
            <Square3Stack3DIcon color="blue" />
            Material Tailwind HTML
          </Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
      </div>
    </div>
  );
}
