import logo from './../../assets/folder.png';

interface EmptyStateProps {
    title: string;
    subtitle?: string;
}
export const EmptyState = ({ title, subtitle }: EmptyStateProps) => {

    return (
        <div className='flex flex-col justify-center items-center gap-7 mt-10'>
            <div className='text-center'>
                <h3 className='text-lg font-semibold'>{title} </h3>
                {subtitle && <h5 className='text-sm text-gray-700'>{subtitle}</h5>}
            </div>
            <img src={logo} alt='empty-state' className='w-30' />
        </div>
    )
}
