import { Menu} from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownComponent() {
  return (
    <Menu as='div' className='relative inline-block text-center'>
      <div>
        <Menu.Button>
          Newsletter<span className='w-5 h-5 ml-1 -mr-1'>▼</span>
        </Menu.Button>
      </div>

      <Menu.Items className='absolute bg-white right-0 w-[120px] mt-2 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
        <div className='py-1'>
          <Menu.Item>
            {({ active }) => (
              <a
                href='https://mlboss.substack.com/'
                className={classNames(
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                  "block px-4 py-2 text-sm"
                )}
              >
                MLBOSS
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href='https://booknote.substack.com/'
                className={classNames(
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                  "block px-4 py-2 text-sm"
                )}
              >
                Book Note
              </a>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
